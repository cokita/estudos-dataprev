# Guia do projeto — Estudos DataPrev (leia isto primeiro)

App de simulados por assunto (LGPD, LAI, etc.) para o concurso DataPrev.
Site estático (HTML/CSS/JS puro), Firebase Hosting + Firestore, deploy automático via GitHub Actions.

## REGRA DE OURO (economia de tokens)
Para adicionar conteúdo, **NÃO leia `public/js/content.js`** — ele é GERADO e só cresce.
Todo conteúdo vive em arquivos pequenos e independentes dentro de `conteudo/`.
Você quase sempre só **cria um arquivo novo** e roda o build. Não precisa ler os arquivos existentes.

## Estrutura de conteudo/
- `conteudo/assuntos.json` — lista de assuntos e a ORDEM das matérias. Ex.: `[{ "id","nome","icon","descricao","materias":["lgpd","lai",...] }]`
- `conteudo/materias/<id>.json` — teoria de uma matéria: `{ "id","nome","icon","descricao","resumo":[...],"flashcards":[...] }`
- `conteudo/simulados/<id>.json` — UM simulado independente: `{ "id","materiaId","nome","descricao","nivel","questoes":[...] }`

O build junta tudo: cada simulado é anexado à matéria pelo `materiaId`.

## Formato de uma QUESTÃO
```json
{ "type": "ce" | "mc", "tag": "Bases legais · art. 7º", "text": "enunciado",
  "options": ["...","..."], "answer": 0, "exp": "comentário do gabarito" }
```
- `answer` é o ÍNDICE (começa em 0) da alternativa correta.
- `ce` (certo/errado): `options` = `["Certo","Errado"]`, `answer` = 0 (certo) ou 1 (errado).
- `mc` (múltipla escolha): 2 a 5 opções.

## Formato de um FLASHCARD
```json
{ "tema": "LGPD", "pergunta": "...", "resposta": "..." }
```

## Formato de uma seção de RESUMO (dentro de materias/<id>.json → resumo[])
```json
{ "titulo": "Bases legais", "html": "<p>...</p><div class=\"destaque\">...</div>" }
```
Classes de estilo já prontas para usar no html: `destaque` (aviso/pegadinha), `mnemonic` (dica), `defs`+`def`+`def-t` (lista de definições).

## TAREFAS COMUNS

### Adicionar um simulado a uma matéria existente
1. Crie `conteudo/simulados/<novo-id>.json` (ex.: `lgpd-02.json`) com `materiaId` da matéria.
2. `node scripts/build-content.mjs`  (valida e regenera o content.js)
3. Publique (ver Deploy).

### Adicionar uma matéria nova
1. Crie `conteudo/materias/<id>.json` com resumo e flashcards.
2. Adicione o `<id>` ao array `materias` do assunto certo em `conteudo/assuntos.json` (na posição desejada).
3. `node scripts/build-content.mjs` → publique.

### Adicionar/ajustar teoria ou flashcards de uma matéria
Edite o arquivo `conteudo/materias/<id>.json` correspondente, rode o build e publique.

## Convenção de IDs
minúsculas com hífen. Simulados: `<materia>-NN` (ex.: `lai-01`, `marco-civil-02`).

## Build
`node scripts/build-content.mjs` — junta conteudo/ → `public/js/content.js`. Falha (exit 1) e lista erros se algo estiver inválido (answer fora do intervalo, type errado, materiaId inexistente, id duplicado). Sempre rode antes de publicar.

## Deploy (automático)
O GitHub Actions publica sozinho a cada push na `main` (ele roda o build e faz `firebase deploy`). Fluxo:
```
cd C:\Users\cokit\Dev\estudos
del .git\index.lock        # solta a trava, se houver
git add .
git commit -m "conteudo: <descrição curta>"
git push
```
Acompanhe em github.com/cokita/estudos-dataprev → aba Actions.

## Arquitetura (só se precisar mexer no app, não no conteúdo)
- `public/js/app.js` — telas e lógica (rotas por hash: `#/`, `#/a/:id`, `#/m/:id`, `#/fc/:id`, `#/s/:id`).
- `public/js/storage.js` — login Google + Firestore (com fallback local).
- `public/styles.css` — estilos.
- `public/js/content.js` — GERADO. Não editar.
