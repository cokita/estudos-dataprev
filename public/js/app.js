// ============================================================
//  App — Estudos DataPrev
//  Roteamento por hash + telas + execução de simulados.
//  Espera window.CONTENT (content.js) e window.STORE (storage.js).
// ============================================================

window.App = (function () {
  const C = window.CONTENT || { assuntos: [] };
  const $app = () => document.getElementById("view");

  // ---- índice rápido por id ----
  const idx = { a: {}, m: {}, s: {} };
  C.assuntos.forEach((a) => {
    idx.a[a.id] = a;
    (a.materias || []).forEach((m) => {
      m._assunto = a; idx.m[m.id] = m;
      (m.simulados || []).forEach((s) => {
        s._materia = m; s._assunto = a; idx.s[s.id] = s;
      });
    });
  });

  let attempts = [];
  let fcKeyHandler = null;   // cache das tentativas do usuário

  // ---------- helpers ----------
  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function escHi(str) {
    return esc(str).replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  }
  function letter(i) { return String.fromCharCode(65 + i); }
  function fmtDate(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    if (isNaN(d)) return "";
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  function attemptsFor(sid) { return attempts.filter((a) => a.simuladoId === sid); }
  function bestPct(sid) {
    const list = attemptsFor(sid);
    if (!list.length) return null;
    return Math.max.apply(null, list.map((a) => a.pct || 0));
  }
  function countSimulados(materia) { return (materia.simulados || []).length; }
  function countQuestoes(materia) { return (materia.simulados || []).reduce((n, s) => n + (s.questoes || []).length, 0); }

  // ---------- header / auth ----------
  function renderHeader() {
    const store = window.STORE || {};
    const box = document.getElementById("auth-box");
    if (!box) return;
    if (store.mode === "firebase" && store.user) {
      const u = store.user;
      const initials = (u.displayName || u.email || "?").trim().charAt(0).toUpperCase();
      box.innerHTML =
        '<div class="user">' +
          (u.photoURL ? '<img src="' + esc(u.photoURL) + '" alt="" class="avatar-img">' : '<span class="avatar">' + esc(initials) + '</span>') +
          '<span class="uname">' + esc(u.displayName || u.email) + '</span>' +
          '<button id="btn-signout" class="btn-ghost" title="Sair"><i class="ti ti-logout"></i></button>' +
        '</div>';
      document.getElementById("btn-signout").onclick = () => store.signOut();
    } else if (store.mode === "firebase") {
      box.innerHTML = '<button id="btn-signin" class="btn-primary"><i class="ti ti-brand-google"></i> Entrar com Google</button>';
      document.getElementById("btn-signin").onclick = () => store.signIn();
    } else {
      box.innerHTML = '<span class="chip"><i class="ti ti-device-floppy"></i> Modo local (sem login)</span>';
    }
  }

  function renderFooter() {
    const store = window.STORE || {};
    const f = document.getElementById("foot-note");
    if (!f) return;
    if (store.mode === "firebase" && store.user) {
      f.textContent = "Respostas salvas na nuvem · seu UID: " + store.user.uid;
    } else if (store.mode === "firebase") {
      f.textContent = "Entre com Google para salvar suas respostas na nuvem.";
    } else {
      f.textContent = "Modo local: respostas salvas só neste navegador. Configure o Firebase (README) para salvar na nuvem.";
    }
  }

  // ---------- breadcrumb ----------
  function crumb(items) {
    return '<nav class="crumb">' + items.map((it, i) => {
      const sep = i > 0 ? '<i class="ti ti-chevron-right"></i>' : "";
      return sep + (it.href ? '<a href="' + it.href + '">' + esc(it.label) + "</a>" : '<span>' + esc(it.label) + "</span>");
    }).join("") + "</nav>";
  }

  // ---------- telas ----------
  function renderHome() {
    const cards = C.assuntos.map((a) => {
      const nMat = (a.materias || []).length;
      const nSim = (a.materias || []).reduce((n, m) => n + countSimulados(m), 0);
      return (
        '<a class="card nav-card" href="#/a/' + a.id + '">' +
          '<div class="card-ic"><i class="ti ' + esc(a.icon || "ti-book") + '"></i></div>' +
          '<div class="card-body">' +
            '<h3>' + esc(a.nome) + "</h3>" +
            '<p>' + esc(a.descricao || "") + "</p>" +
            '<div class="meta">' + nMat + " matéria" + (nMat === 1 ? "" : "s") + " · " + nSim + " simulado" + (nSim === 1 ? "" : "s") + "</div>" +
          "</div>" +
          '<i class="ti ti-chevron-right card-arrow"></i>' +
        "</a>"
      );
    }).join("");
    let banner = "";
    if (C.mapa) {
      const todos = allTopicos();
      const dom = todos.filter((t) => topStatus(t.id) === "dominado").length;
      banner =
        '<a class="fc-entry mp-entry" href="#/mapa">' +
          '<div class="fc-entry-ic"><i class="ti ti-map-2"></i></div>' +
          '<div class="fc-entry-body">' +
            "<h3>Mapa de estudos</h3>" +
            "<p>Todos os " + todos.length + " tópicos do edital, com prioridade e o que a FGV cobra em cada um · " + dom + " dominado" + (dom === 1 ? "" : "s") + "</p>" +
          "</div>" +
          '<span class="fc-entry-cta">Ver o todo <i class="ti ti-chevron-right"></i></span>' +
        "</a>";
    }
    $app().innerHTML =
      '<div class="page-head"><h1>Assuntos do edital</h1><p class="sub">Escolha um assunto para ver as matérias e simulados.</p></div>' +
      banner +
      '<div class="grid">' + (cards || '<p class="empty">Nenhum assunto ainda.</p>') + "</div>";
  }

  function renderAssunto(aid) {
    const a = idx.a[aid];
    if (!a) return renderHome();
    const cards = (a.materias || []).map((m) => {
      return (
        '<a class="card nav-card" href="#/m/' + m.id + '">' +
          '<div class="card-ic"><i class="ti ' + esc(m.icon || "ti-file-text") + '"></i></div>' +
          '<div class="card-body">' +
            '<h3>' + esc(m.nome) + "</h3>" +
            '<p>' + esc(m.descricao || "") + "</p>" +
            '<div class="meta"><i class="ti ti-book-2"></i> Material de estudo' + (countSimulados(m) ? ' · ' + countSimulados(m) + ' simulado' + (countSimulados(m) === 1 ? '' : 's') : '') + '</div>' +
          "</div>" +
          '<i class="ti ti-chevron-right card-arrow"></i>' +
        "</a>"
      );
    }).join("");
    $app().innerHTML =
      crumb([{ label: "Assuntos", href: "#/" }, { label: a.nome }]) +
      '<div class="page-head"><h1>' + esc(a.nome) + "</h1><p class=\"sub\">" + esc(a.descricao || "") + "</p></div>" +
      '<div class="grid">' + (cards || '<p class="empty">Nenhuma matéria ainda.</p>') + "</div>";
  }

  function renderMateria(mid) {
    const m = idx.m[mid];
    if (!m) return renderHome();
    const a = m._assunto;

    // material de estudo
    const resumoHtml = (m.resumo || []).map((sec) =>
      '<section class="sec"><h2>' + esc(sec.titulo) + "</h2>" + (sec.html || "") + "</section>"
    ).join("");

    // flashcards (entrada para o modo de estudo card-a-card)
    const fcHtml = (m.flashcards && m.flashcards.length) ? (
      '<div class="block-head"><h2><i class="ti ti-cards"></i> Flashcards</h2></div>' +
      '<a class="fc-entry" href="#/fc/' + m.id + '">' +
        '<div class="fc-entry-ic"><i class="ti ti-cards"></i></div>' +
        '<div class="fc-entry-body"><h3>Estudar flashcards</h3>' +
          '<p>' + m.flashcards.length + ' cartões · um a um, com Acertei / Errei</p></div>' +
        '<span class="fc-entry-cta">Começar <i class="ti ti-arrow-right"></i></span>' +
      "</a>"
    ) : "";

    // simulados
    const simCards = (m.simulados || []).map((s) => {
      const best = bestPct(s.id);
      const nAtt = attemptsFor(s.id).length;
      const badge = best === null ? "" :
        '<span class="badge ' + (best >= 80 ? "ok" : best >= 60 ? "warn" : "bad") + '">Melhor: ' + best + "%</span>";
      const done = nAtt ? '<div class="meta">' + nAtt + " tentativa" + (nAtt === 1 ? "" : "s") + "</div>" : '<div class="meta">Não iniciado</div>';
      return (
        '<a class="card nav-card" href="#/s/' + s.id + '">' +
          '<div class="card-ic"><i class="ti ti-clipboard-list"></i></div>' +
          '<div class="card-body">' +
            "<h3>" + esc(s.nome) + " " + badge + "</h3>" +
            "<p>" + esc(s.descricao || "") + "</p>" +
            '<div class="meta-row"><span class="meta">' + (s.questoes || []).length + " questões</span>" +
              (s.nivel ? '<span class="tagline">' + esc(s.nivel) + "</span>" : "") + done + "</div>" +
          "</div>" +
          '<i class="ti ti-player-play card-arrow"></i>' +
        "</a>"
      );
    }).join("");
    const simSection =
      '<div class="block-head"><h2><i class="ti ti-clipboard-check"></i> Simulados</h2>' +
      (simCards ? '<span class="hint">Teste seus conhecimentos</span>' : "") + "</div>" +
      (simCards ? '<div class="grid">' + simCards + "</div>"
                : '<p class="empty">Simulado em breve para esta matéria — me peça no chat que eu monto.</p>');

    $app().innerHTML =
      crumb([{ label: "Assuntos", href: "#/" }, { label: a.nome, href: "#/a/" + a.id }, { label: m.nome }]) +
      '<div class="page-head"><h1>' + esc(m.nome) + "</h1><p class=\"sub\">" + esc(m.descricao || "") + "</p></div>" +
      (resumoHtml ? '<article class="prose">' + resumoHtml + "</article>" : "") +
      fcHtml +
      simSection;

  }

  // ---------- flashcards: modo de estudo card-a-card ----------
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function renderFlashcards(mid, onlyWrong) {
    const m = idx.m[mid];
    if (!m || !(m.flashcards || []).length) return renderMateria(mid);
    const a = m._assunto;
    const cards = m.flashcards;

    let order = cards.map((_, i) => i);
    if (onlyWrong && onlyWrong.length) order = onlyWrong.slice();
    shuffle(order);
    let pos = 0;
    const results = {};

    $app().innerHTML =
      crumb([{ label: "Assuntos", href: "#/" }, { label: a.nome, href: "#/a/" + a.id }, { label: m.nome, href: "#/m/" + m.id }, { label: "Flashcards" }]) +
      '<div id="fc-stage" class="fc-stage"></div>';
    const stage = document.getElementById("fc-stage");

    function draw() {
      if (pos >= order.length) return summary();
      const c = cards[order[pos]];
      const n = order.length;
      stage.innerHTML =
        '<div class="fcs-top"><span class="fcs-count">Cartão ' + (pos + 1) + " de " + n + "</span>" +
          '<a class="btn-ghost sm" href="#/m/' + mid + '"><i class="ti ti-x"></i> Sair</a></div>' +
        '<div class="fcs-bar"><div class="fcs-bar-fill" style="width:' + Math.round((pos / n) * 100) + '%"></div></div>' +
        '<div class="fcs-card">' +
          '<span class="fcs-tema">' + esc(c.tema) + "</span>" +
          '<div class="fcs-q">' + esc(c.pergunta) + "</div>" +
          '<div class="fcs-a" id="fcs-a" hidden><span class="fcs-a-label">Resposta</span>' + esc(c.resposta) + "</div>" +
        "</div>" +
        '<div class="fcs-actions" id="fcs-actions"><button class="btn-primary wide" id="btn-reveal"><i class="ti ti-eye"></i> Mostrar resposta <span class="kbd">espaço</span></button></div>' +
        '<div class="fcs-judge" id="fcs-judge" hidden>' +
          '<button class="judge err" id="btn-err"><i class="ti ti-x"></i> Errei</button>' +
          '<button class="judge ok" id="btn-ok"><i class="ti ti-check"></i> Acertei</button>' +
        "</div>";
      document.getElementById("btn-reveal").onclick = reveal;
      document.getElementById("btn-err").onclick = function () { judge(false); };
      document.getElementById("btn-ok").onclick = function () { judge(true); };
    }

    function reveal() {
      const el = document.getElementById("fcs-a");
      if (!el) return;
      el.hidden = false;
      document.getElementById("fcs-actions").hidden = true;
      document.getElementById("fcs-judge").hidden = false;
    }

    function judge(correct) {
      results[order[pos]] = correct;
      pos++;
      draw();
    }

    function summary() {
      const total = order.length;
      const acertos = Object.keys(results).filter((k) => results[k]).length;
      const wrong = order.filter((ci) => results[ci] === false);
      const pct = total ? Math.round((acertos / total) * 100) : 0;
      const cls = pct >= 80 ? "ok" : pct >= 60 ? "warn" : "bad";
      window.STORE.saveAttempt({
        kind: "flashcards", materiaId: m.id, materiaNome: m.nome, assuntoId: a.id,
        assuntoNome: a.nome, acertos: acertos, total: total, pct: pct
      }).catch(function (e) { console.error(e); });
      stage.innerHTML =
        '<div class="fcs-summary ' + cls + '">' +
          '<i class="ti ti-' + (pct >= 80 ? "confetti" : "flag") + ' fcs-sum-ic"></i>' +
          '<div class="fcs-sum-num">' + acertos + " / " + total + "</div>" +
          '<div class="fcs-sum-msg">Você acertou ' + pct + "% dos cartões" + (wrong.length ? " · " + wrong.length + " pra revisar" : " · gabaritou!") + "</div>" +
        "</div>" +
        '<div class="fcs-sum-actions">' +
          (wrong.length ? '<button class="btn-primary wide" id="btn-retry"><i class="ti ti-refresh"></i> Revisar os ' + wrong.length + " que errei</button>" : "") +
          '<button class="btn-ghost wide" id="btn-again"><i class="ti ti-rotate"></i> Refazer todos</button>' +
          '<a class="btn-ghost wide" href="#/m/' + mid + '"><i class="ti ti-arrow-left"></i> Voltar à matéria</a>' +
        "</div>";
      if (wrong.length) document.getElementById("btn-retry").onclick = function () { renderFlashcards(mid, wrong); };
      document.getElementById("btn-again").onclick = function () { renderFlashcards(mid); };
    }

    if (fcKeyHandler) window.removeEventListener("keydown", fcKeyHandler);
    fcKeyHandler = function (e) {
      if (!document.getElementById("fc-stage")) return;
      const judgeVisible = document.getElementById("fcs-judge") && !document.getElementById("fcs-judge").hidden;
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        if (!judgeVisible) reveal();
      } else if (judgeVisible && (e.key === "1" || e.key === "ArrowLeft")) {
        e.preventDefault(); judge(false);
      } else if (judgeVisible && (e.key === "2" || e.key === "ArrowRight")) {
        e.preventDefault(); judge(true);
      }
    };
    window.addEventListener("keydown", fcKeyHandler);

    draw();
  }

  // ---------- executar simulado ----------
  function renderSimulado(sid) {
    const s = idx.s[sid];
    if (!s) return renderHome();
    const a = s._assunto, m = s._materia;
    const qs = s.questoes || [];
    const responses = new Array(qs.length).fill(null);
    let corrected = false;

    const past = attemptsFor(sid);
    const pastHtml = past.length ? (
      '<div class="past"><h4><i class="ti ti-history"></i> Tentativas anteriores</h4>' +
      past.map((p) => (
        '<div class="past-row">' +
          '<span class="past-score ' + (p.pct >= 80 ? "ok" : p.pct >= 60 ? "warn" : "bad") + '">' + p.score + "/" + p.total + " · " + p.pct + "%</span>" +
          '<span class="past-date">' + fmtDate(p.createdAt) + "</span>" +
          '<a class="btn-ghost sm" href="#/s/' + sid + "/rev/" + encodeURIComponent(p.id) + '">Revisar</a>' +
        "</div>"
      )).join("") + "</div>"
    ) : "";

    $app().innerHTML =
      crumb([{ label: "Assuntos", href: "#/" }, { label: a.nome, href: "#/a/" + a.id }, { label: m.nome, href: "#/m/" + m.id }, { label: s.nome }]) +
      '<div class="page-head"><h1>' + esc(s.nome) + "</h1><p class=\"sub\">" + esc(s.descricao || "") + "</p></div>" +
      pastHtml +
      '<div id="questions"></div>' +
      '<div class="controls"><button id="submit-btn" class="btn-primary">Corrigir simulado</button>' +
        '<button id="reset-btn" class="btn-ghost" style="display:none">Refazer</button>' +
        '<span id="progress" class="progress"></span></div>' +
      '<div id="result"></div>';

    const root = document.getElementById("questions");
    root.innerHTML = qs.map((q, qi) => questionHtml(q, qi)).join("");

    // bind radios
    root.querySelectorAll("input[type=radio]").forEach((r) => {
      r.addEventListener("change", () => {
        responses[Number(r.dataset.q)] = Number(r.value);
        updateProgress();
      });
    });

    function updateProgress() {
      if (corrected) return;
      const done = responses.filter((x) => x !== null).length;
      const p = document.getElementById("progress");
      p.style.color = ""; p.textContent = done + "/" + qs.length + " respondidas";
    }

    function correct() {
      const un = responses.findIndex((x) => x === null);
      if (un !== -1) {
        const p = document.getElementById("progress");
        p.textContent = "Falta responder a questão " + (un + 1) + ".";
        p.classList.add("err");
        document.getElementById("card-" + un).scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      corrected = true;
      let score = 0;
      qs.forEach((q, qi) => {
        const ok = responses[qi] === q.answer;
        if (ok) score++;
        revealCard(qi, q, responses[qi], ok);
      });
      const pct = Math.round((score / qs.length) * 100);
      showResult(score, qs.length, pct);
      document.getElementById("submit-btn").style.display = "none";
      document.getElementById("reset-btn").style.display = "inline-flex";
      document.getElementById("progress").textContent = "";
      // salvar tentativa
      const attempt = {
        simuladoId: sid, simuladoNome: s.nome, materiaId: m.id, materiaNome: m.nome,
        assuntoId: a.id, assuntoNome: a.nome, respostas: responses.slice(),
        score: score, total: qs.length, pct: pct
      };
      window.STORE.saveAttempt(attempt).then(() => refreshAttempts()).catch((e) => console.error("Erro ao salvar:", e));
      document.getElementById("result").scrollIntoView({ behavior: "smooth", block: "center" });
    }

    function showResult(score, total, pct) {
      let msg, cls;
      if (pct >= 80) { msg = "Mandou muito bem — esse bloco tá fixado."; cls = "ok"; }
      else if (pct >= 60) { msg = "Base sólida. Revise os erros abaixo e volte amanhã."; cls = "warn"; }
      else { msg = "Vale reler o resumo antes de refazer — foque nos comentários."; cls = "bad"; }
      const saved = (window.STORE.mode === "firebase" && window.STORE.user) ? "Salvo na sua conta." :
                    (window.STORE.mode === "firebase") ? "Entre com Google para salvar na nuvem." : "Salvo neste navegador.";
      document.getElementById("result").innerHTML =
        '<div class="result-box ' + cls + '">' +
          '<div class="result-label">Sua nota</div>' +
          '<div class="result-num">' + score + "/" + total + " · " + pct + "%</div>" +
          '<div class="result-msg">' + msg + '</div>' +
          '<div class="result-saved"><i class="ti ti-check"></i> ' + saved + "</div>" +
        "</div>";
    }

    document.getElementById("submit-btn").onclick = correct;
    document.getElementById("reset-btn").onclick = () => renderSimulado(sid);
    updateProgress();
  }

  function questionHtml(q, qi) {
    const tagLabel = (q.type === "ce" ? "Certo/Errado" : "Múltipla escolha") + " · " + q.tag;
    const opts = (q.options || []).map((opt, oi) => (
      '<label class="opt" data-q="' + qi + '">' +
        '<input type="radio" name="q' + qi + '" value="' + oi + '" data-q="' + qi + '">' +
        '<span>' + (q.type === "mc" ? "<b>" + letter(oi) + ")</b> " : "") + esc(opt) + "</span>" +
      "</label>"
    )).join("");
    return (
      '<div class="qcard" id="card-' + qi + '">' +
        '<span class="qtag">' + esc(tagLabel) + "</span>" +
        '<p class="qtext">' + (qi + 1) + ". " + escHi(q.text) + "</p>" +
        '<div class="opts">' + opts + "</div>" +
        '<div class="feedback" id="fb-' + qi + '"></div>' +
      "</div>"
    );
  }

  function revealCard(qi, q, chosen, ok, readonly) {
    const card = document.getElementById("card-" + qi);
    if (!card) return;
    card.querySelectorAll("input[type=radio]").forEach((r) => {
      r.disabled = true;
      if (Number(r.value) === chosen) r.checked = true;
    });
    card.querySelectorAll(".opt").forEach((row, oi) => {
      if (oi === q.answer) row.classList.add("correct");
      else if (oi === chosen && !ok) row.classList.add("wrong");
    });
    const fb = document.getElementById("fb-" + qi);
    fb.classList.add("show", ok ? "ok" : "bad");
    fb.innerHTML = ok
      ? '<b><i class="ti ti-check"></i> Acertou.</b> ' + escHi(q.exp)
      : '<b><i class="ti ti-x"></i> ' + (chosen === null ? "Não respondida." : "Você marcou " + (q.type === "mc" ? letter(chosen) : (q.options[chosen] || "")) + ".") + " Correta em verde.</b> " + escHi(q.exp);
  }

  // ---------- revisar tentativa ----------
  function renderReview(sid, attemptId) {
    const s = idx.s[sid];
    if (!s) return renderHome();
    const a = s._assunto, m = s._materia;
    const att = attempts.find((x) => String(x.id) === String(attemptId));
    if (!att) {
      $app().innerHTML = crumb([{ label: "Assuntos", href: "#/" }, { label: s.nome, href: "#/s/" + sid }]) +
        '<p class="empty">Tentativa não encontrada. <a href="#/s/' + sid + '">Voltar ao simulado</a>.</p>';
      return;
    }
    const qs = s.questoes || [];
    $app().innerHTML =
      crumb([{ label: "Assuntos", href: "#/" }, { label: a.nome, href: "#/a/" + a.id }, { label: m.nome, href: "#/m/" + m.id }, { label: s.nome, href: "#/s/" + sid }, { label: "Revisão" }]) +
      '<div class="page-head"><h1>Revisão — ' + esc(s.nome) + "</h1>" +
        '<p class="sub">Tentativa de ' + fmtDate(att.createdAt) + " · nota " + att.score + "/" + att.total + " (" + att.pct + "%)</p></div>" +
      '<div id="questions"></div>' +
      '<div class="controls"><a class="btn-primary" href="#/s/' + sid + '">Refazer este simulado</a>' +
        '<a class="btn-ghost" href="#/m/' + m.id + '">Voltar à matéria</a></div>';
    const root = document.getElementById("questions");
    root.innerHTML = qs.map((q, qi) => questionHtml(q, qi)).join("");
    qs.forEach((q, qi) => {
      const chosen = att.respostas ? att.respostas[qi] : null;
      revealCard(qi, q, chosen == null ? null : Number(chosen), Number(chosen) === q.answer, true);
    });
  }

  // ---------- mapa de estudos ----------
  const ST_ORDER = ["nao-iniciado", "estudando", "revisar", "dominado"];
  const ST_INFO = {
    "nao-iniciado": { label: "Não iniciado", icon: "ti-circle" },
    "estudando":    { label: "Estudando",    icon: "ti-player-play" },
    "revisar":      { label: "Revisar",      icon: "ti-refresh" },
    "dominado":     { label: "Dominado",     icon: "ti-circle-check" }
  };
  const PRIO_LABEL = { alta: "Alta", media: "Média", baixa: "Baixa" };
  let mapaProg = {};
  let mapaFilter = { prio: "todas", status: "todos" };

  function topStatus(tid) { return mapaProg[tid] || "nao-iniciado"; }
  function allTopicos() {
    const M = C.mapa;
    if (!M) return [];
    return (M.modulos || []).reduce((acc, mod) =>
      acc.concat((mod.disciplinas || []).reduce((a2, d) => a2.concat(d.topicos || []), [])), []);
  }
  function discStats(d) {
    const ts = d.topicos || [];
    const dom = ts.filter((t) => topStatus(t.id) === "dominado").length;
    const emCurso = ts.filter((t) => ["estudando", "revisar"].indexOf(topStatus(t.id)) >= 0).length;
    const horas = ts.reduce((n, t) => n + (t.esforco || 0), 0);
    const restam = ts.filter((t) => topStatus(t.id) !== "dominado").reduce((n, t) => n + (t.esforco || 0), 0);
    return { total: ts.length, dom: dom, emCurso: emCurso, horas: horas, restam: restam, pct: ts.length ? Math.round((dom / ts.length) * 100) : 0 };
  }
  function passaFiltro(t) {
    if (mapaFilter.prio !== "todas" && t.prioridade !== mapaFilter.prio) return false;
    if (mapaFilter.status !== "todos" && topStatus(t.id) !== mapaFilter.status) return false;
    return true;
  }

  function renderMapa() {
    const M = C.mapa;
    if (!M) return renderHome();
    const todos = allTopicos();
    const dom = todos.filter((t) => topStatus(t.id) === "dominado").length;
    const restam = todos.filter((t) => topStatus(t.id) !== "dominado").reduce((n, t) => n + (t.esforco || 0), 0);
    const pct = todos.length ? Math.round((dom / todos.length) * 100) : 0;

    const chip = (grupo, valor, label) => {
      const on = mapaFilter[grupo] === valor;
      return '<button class="mp-chip' + (on ? " on" : "") + '" data-f="' + grupo + '" data-v="' + valor + '">' + esc(label) + "</button>";
    };

    const filtros =
      '<div class="mp-filters">' +
        '<div class="mp-fgroup"><span class="mp-flabel">Prioridade</span>' +
          chip("prio", "todas", "Todas") + chip("prio", "alta", "Alta") + chip("prio", "media", "Média") + chip("prio", "baixa", "Baixa") +
        "</div>" +
        '<div class="mp-fgroup"><span class="mp-flabel">Status</span>' +
          chip("status", "todos", "Todos") +
          ST_ORDER.map((s) => chip("status", s, ST_INFO[s].label)).join("") +
        "</div>" +
      "</div>";

    const p = M.prova || {};
    const painel =
      '<div class="mp-panel">' +
        '<div class="mp-panel-main">' +
          '<div class="mp-big">' + dom + "<span>/" + todos.length + "</span></div>" +
          '<div class="mp-big-lb">tópicos dominados</div>' +
          '<div class="fcs-bar"><div class="fcs-bar-fill" style="width:' + pct + '%"></div></div>' +
        "</div>" +
        '<div class="mp-panel-side">' +
          '<div class="mp-kv"><span>Prova</span><b>' + esc(p.data || "—") + "</b></div>" +
          '<div class="mp-kv"><span>Questões</span><b>' + esc(String(p.questoes || "—")) + " · " + esc(String(p.pontosMax || "—")) + " pts</b></div>" +
          '<div class="mp-kv"><span>Corte</span><b>' + esc(String(p.corte || "—")) + " pts</b></div>" +
          '<div class="mp-kv"><span>Falta estudar</span><b>~' + restam + " sessões</b></div>" +
        "</div>" +
      "</div>" +
      (p.regra ? '<p class="mp-regra"><i class="ti ti-alert-triangle"></i> ' + esc(p.regra) + "</p>" : "");

    const modulosHtml = (M.modulos || []).map((mod) => {
      const discs = (mod.disciplinas || []).map((d) => {
        const st = discStats(d);
        const tops = (d.topicos || []).filter(passaFiltro);
        const linhas = tops.map((t) => {
          const s = topStatus(t.id);
          const info = ST_INFO[s];
          return (
            '<div class="mp-top st-' + s + '">' +
              '<button class="mp-st" data-top="' + esc(t.id) + '" title="' + esc(info.label) + ' — clique para mudar">' +
                '<i class="ti ' + info.icon + '"></i>' +
              "</button>" +
              '<div class="mp-top-body">' +
                '<div class="mp-top-head">' +
                  '<span class="mp-top-nome">' + esc(t.nome) + "</span>" +
                  '<span class="mp-prio p-' + esc(t.prioridade) + '">' + esc(PRIO_LABEL[t.prioridade] || t.prioridade) + "</span>" +
                  '<span class="mp-esf"><i class="ti ti-clock"></i> ' + (t.esforco || 0) + "h</span>" +
                "</div>" +
                '<p class="mp-cai">' + esc(t.oQueCai || "") + "</p>" +
                (t.materiaId ? '<a class="mp-link" href="#/m/' + esc(t.materiaId) + '"><i class="ti ti-book-2"></i> Abrir material no app</a>' : '<span class="mp-link off"><i class="ti ti-plus"></i> Sem material ainda</span>') +
              "</div>" +
            "</div>"
          );
        }).join("");

        return (
          '<section class="mp-disc">' +
            '<header class="mp-disc-head">' +
              '<div class="card-ic"><i class="ti ' + esc(d.icon || "ti-book") + '"></i></div>' +
              '<div class="mp-disc-info">' +
                "<h3>" + esc(d.nome) + '<span class="mp-prio p-' + esc(d.prioridade || "media") + '">' + esc(PRIO_LABEL[d.prioridade] || "") + "</span></h3>" +
                '<div class="meta">' +
                  (d.questoes ? d.questoes + " questões · " + d.pontos + " pts · " : "") +
                  st.total + " tópicos · ~" + st.horas + "h · " + st.dom + " dominado" + (st.dom === 1 ? "" : "s") +
                "</div>" +
                '<div class="fcs-bar"><div class="fcs-bar-fill" style="width:' + st.pct + '%"></div></div>' +
              "</div>" +
              (d.assuntoId ? '<a class="btn-ghost mp-goto" href="#/a/' + esc(d.assuntoId) + '" title="Abrir no app"><i class="ti ti-external-link"></i></a>' : "") +
            "</header>" +
            (d.nota ? '<p class="mp-nota"><i class="ti ti-bulb"></i> ' + esc(d.nota) + "</p>" : "") +
            (linhas || '<p class="empty">Nenhum tópico com esse filtro.</p>') +
          "</section>"
        );
      }).join("");

      return (
        '<div class="mp-modulo">' +
          '<div class="block-head"><h2><i class="ti ti-layout-list"></i> ' + esc(mod.nome) + "</h2>" +
            '<span class="hint">' + esc(String(mod.questoes || "")) + " questões · peso " + esc(String(mod.peso || "")) + " · " + esc(String(mod.pontos || "")) + " pontos</span></div>" +
          (mod.resumo ? '<p class="mp-resumo">' + esc(mod.resumo) + "</p>" : "") +
          discs +
        "</div>"
      );
    }).join("");

    $app().innerHTML =
      crumb([{ label: "Assuntos", href: "#/" }, { label: "Mapa de estudos" }]) +
      '<div class="page-head"><h1>Mapa de estudos</h1><p class="sub">Tudo que o edital cobra, tópico a tópico. Clique no círculo à esquerda para marcar seu progresso: não iniciado → estudando → revisar → dominado.</p></div>' +
      painel + filtros + modulosHtml;

    $app().querySelectorAll(".mp-chip").forEach((b) => {
      b.onclick = () => { mapaFilter[b.dataset.f] = b.dataset.v; renderMapa(); };
    });
    $app().querySelectorAll(".mp-st").forEach((b) => {
      b.onclick = () => {
        const tid = b.dataset.top;
        const next = ST_ORDER[(ST_ORDER.indexOf(topStatus(tid)) + 1) % ST_ORDER.length];
        mapaProg[tid] = next;
        if (next === "nao-iniciado") delete mapaProg[tid];
        renderMapa();
        window.STORE.setMapaStatus(tid, next).catch((e) => console.error(e));
      };
    });
  }

  // ---------- roteador ----------
  function route() {
    const h = (location.hash || "#/").replace(/^#/, "");
    const parts = h.split("/").filter(Boolean); // ex: ["s","lgpd-01","rev","abc"]
    window.scrollTo(0, 0);
    if (fcKeyHandler) { window.removeEventListener("keydown", fcKeyHandler); fcKeyHandler = null; }
    if (parts.length === 0) return renderHome();
    switch (parts[0]) {
      case "mapa": return renderMapa();
      case "a": return renderAssunto(parts[1]);
      case "m": return renderMateria(parts[1]);
      case "fc": return renderFlashcards(parts[1]);
      case "s":
        if (parts[2] === "rev") return renderReview(parts[1], decodeURIComponent(parts[3] || ""));
        return renderSimulado(parts[1]);
      default: return renderHome();
    }
  }

  // ---------- dados ----------
  function refreshAttempts() {
    return Promise.all([
      window.STORE.getAllAttempts().then((list) => { attempts = list || []; }).catch((e) => { console.error(e); attempts = []; }),
      (window.STORE.getMapaProgress ? window.STORE.getMapaProgress() : Promise.resolve({}))
        .then((p) => { mapaProg = p || {}; }).catch((e) => { console.error(e); mapaProg = {}; })
    ]);
  }

  // ---------- ciclo de vida ----------
  function boot() {
    renderHeader(); renderFooter();
    window.addEventListener("hashchange", route);
    refreshAttempts().then(route);
  }
  function onAuthChanged() {
    renderHeader(); renderFooter();
    refreshAttempts().then(route);
  }

  return { boot: boot, onAuthChanged: onAuthChanged };
})();
