// Junta os arquivos de conteudo/ e gera public/js/content.js
// Uso: node scripts/build-content.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = (p) => path.join(root, "conteudo", p);
const readJSON = (f) => JSON.parse(fs.readFileSync(f, "utf8"));

const errors = [];
const warn = (m) => errors.push(m);

// 1) assuntos + ordem das matérias
const assuntos = readJSON(dir("assuntos.json"));

// 2) carrega matérias e simulados
const materias = {};
for (const f of fs.readdirSync(dir("materias")).filter((x) => x.endsWith(".json"))) {
  const m = readJSON(dir("materias/" + f));
  if (materias[m.id]) warn(`matéria duplicada: ${m.id}`);
  materias[m.id] = m;
}

const simsByMateria = {};
const seenSim = new Set();
for (const f of fs.readdirSync(dir("simulados")).filter((x) => x.endsWith(".json"))) {
  const s = readJSON(dir("simulados/" + f));
  if (seenSim.has(s.id)) warn(`simulado com id duplicado: ${s.id}`);
  seenSim.add(s.id);
  if (!s.materiaId) warn(`simulado ${s.id} sem materiaId`);
  (s.questoes || []).forEach((q, i) => {
    if (!Array.isArray(q.options) || q.options.length < 2) warn(`${s.id} Q${i + 1}: options inválidas`);
    if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= (q.options || []).length) warn(`${s.id} Q${i + 1}: answer fora do intervalo`);
    if (!q.text || !q.exp) warn(`${s.id} Q${i + 1}: falta text ou exp`);
    if (q.type !== "ce" && q.type !== "mc") warn(`${s.id} Q${i + 1}: type deve ser "ce" ou "mc"`);
  });
  (simsByMateria[s.materiaId] = simsByMateria[s.materiaId] || []).push(s);
}
for (const k in simsByMateria) simsByMateria[k].sort((a, b) => a.id.localeCompare(b.id));

// 3) monta a árvore
const out = { assuntos: [] };
for (const a of assuntos) {
  const mats = [];
  for (const mid of a.materias || []) {
    const m = materias[mid];
    if (!m) { warn(`assunto ${a.id} referencia matéria inexistente: ${mid}`); continue; }
    const sims = (simsByMateria[mid] || []).map((s) => ({
      id: s.id, nome: s.nome, descricao: s.descricao || "", nivel: s.nivel || "", questoes: s.questoes || []
    }));
    mats.push({ id: m.id, nome: m.nome, icon: m.icon || "", descricao: m.descricao || "", resumo: m.resumo || [], flashcards: m.flashcards || [], simulados: sims });
  }
  out.assuntos.push({ id: a.id, nome: a.nome, icon: a.icon || "", descricao: a.descricao || "", materias: mats });
}

// 4) mapa de estudos (opcional): conteudo/mapa.json
let mapa = null;
const mapaFile = dir("mapa.json");
if (fs.existsSync(mapaFile)) {
  mapa = readJSON(mapaFile);
  const seenTop = new Set();
  const PRIOS = ["alta", "media", "baixa"];
  for (const mod of mapa.modulos || []) {
    if (!mod.id || !mod.nome) warn(`mapa: módulo sem id ou nome`);
    for (const d of mod.disciplinas || []) {
      if (!d.id || !d.nome) warn(`mapa: disciplina sem id ou nome em ${mod.id}`);
      if (d.assuntoId && !assuntos.some((a) => a.id === d.assuntoId)) warn(`mapa: disciplina ${d.id} referencia assunto inexistente: ${d.assuntoId}`);
      if (!(d.topicos || []).length) warn(`mapa: disciplina ${d.id} sem tópicos`);
      for (const t of d.topicos || []) {
        if (!t.id) { warn(`mapa: tópico sem id em ${d.id}`); continue; }
        if (seenTop.has(t.id)) warn(`mapa: tópico com id duplicado: ${t.id}`);
        seenTop.add(t.id);
        if (!t.nome || !t.oQueCai) warn(`mapa: tópico ${t.id} sem nome ou oQueCai`);
        if (!PRIOS.includes(t.prioridade)) warn(`mapa: tópico ${t.id} com prioridade inválida (use alta|media|baixa)`);
        if (typeof t.esforco !== "number" || t.esforco <= 0) warn(`mapa: tópico ${t.id} com esforco inválido`);
        if (t.materiaId && !materias[t.materiaId]) warn(`mapa: tópico ${t.id} referencia matéria inexistente: ${t.materiaId}`);
      }
    }
  }
  out.mapa = mapa;
}

if (errors.length) {
  console.error("BUILD FALHOU:\n - " + errors.join("\n - "));
  process.exit(1);
}

const header = "// ARQUIVO GERADO AUTOMATICAMENTE por scripts/build-content.mjs\n// NÃO edite à mão — edite os arquivos em conteudo/ e rode: node scripts/build-content.mjs\n\n";
fs.writeFileSync(path.join(root, "public/js/content.js"), header + "window.CONTENT = " + JSON.stringify(out, null, 2) + ";\n");

const nSim = out.assuntos.reduce((n, a) => n + a.materias.reduce((k, m) => k + m.simulados.length, 0), 0);
const nQ = out.assuntos.reduce((n, a) => n + a.materias.reduce((k, m) => k + m.simulados.reduce((j, s) => j + s.questoes.length, 0), 0), 0);
const nFc = out.assuntos.reduce((n, a) => n + a.materias.reduce((k, m) => k + m.flashcards.length, 0), 0);
console.log(`OK: ${out.assuntos.length} assunto(s), ${out.assuntos.reduce((n,a)=>n+a.materias.length,0)} matéria(s), ${nSim} simulado(s), ${nQ} questão(ões), ${nFc} flashcard(s).`);
if (mapa) {
  const nDisc = (mapa.modulos || []).reduce((n, m) => n + (m.disciplinas || []).length, 0);
  const nTop = (mapa.modulos || []).reduce((n, m) => n + (m.disciplinas || []).reduce((k, d) => k + (d.topicos || []).length, 0), 0);
  const nSes = (mapa.modulos || []).reduce((n, m) => n + (m.disciplinas || []).reduce((k, d) => k + (d.topicos || []).reduce((j, t) => j + (t.esforco || 0), 0), 0), 0);
  console.log(`Mapa: ${nDisc} disciplina(s), ${nTop} tópico(s), ~${nSes} sessão(ões) de estudo estimadas.`);
}
