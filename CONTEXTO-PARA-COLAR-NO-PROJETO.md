# Projeto: Estudos DataPrev — como adicionar estudo e questões

App de simulados por assunto para o concurso DataPrev. Site estático (HTML/CSS/JS) no
Firebase Hosting + Firestore, com deploy automático via GitHub Actions a cada push na `main`.

Pasta no computador: `C:\Users\cokit\Dev\estudos` (repo: github.com/cokita/estudos-dataprev).
Se a pasta não estiver conectada, peça acesso a ela antes de agir.

## Gatilho
Quando eu disser algo como "adicione no projeto o nosso estudo / as questões", pegue o
conteúdo de estudo e/ou as questões DESTA conversa e inclua no projeto seguindo o processo
abaixo — sem me pedir pra reexplicar formato.

## Regra de ouro (economia de tokens)
NÃO leia `public/js/content.js` — ele é GERADO e só cresce. Todo conteúdo vive em arquivos
pequenos em `conteudo/`. Em geral você só CRIA um arquivo novo e roda o build. O guia
completo já está em `CLAUDE.md` na raiz do repo — consulte lá se precisar de detalhe.

## Onde colocar cada coisa
- Simulado novo → crie `conteudo/simulados/<id>.json`:
  `{ "id","materiaId","nome","descricao","nivel","questoes":[...] }`
  id no padrão `<materia>-NN` (ex.: `lgpd-02`, `lai-01`).
- Matéria nova → crie `conteudo/materias/<id>.json`:
  `{ "id","nome","icon","descricao","resumo":[{ "titulo","html" }],"flashcards":[{ "tema","pergunta","resposta" }] }`
  e adicione o `<id>` ao array `materias` do assunto certo em `conteudo/assuntos.json`.
- Teoria/flashcards em matéria existente → edite `conteudo/materias/<id>.json`.

## Formato da questão
`{ "type":"ce"|"mc", "tag":"...", "text":"...", "options":[...], "answer": <índice 0..n>, "exp":"..." }`
- `ce`: options `["Certo","Errado"]`, answer 0 (certo) ou 1 (errado).
- `mc`: 2 a 5 opções; answer = índice (começa em 0) da alternativa correta.

## Depois de criar/editar
1. Rode `node scripts/build-content.mjs` (valida e regenera o content.js; falha se algo estiver errado).
2. Me passe os comandos de publicação:
   `git add . && git commit -m "conteudo: <descrição>" && git push`
   (o GitHub Actions gera o content.js e publica no Firebase sozinho).

## Boas práticas
- Confira que cada `answer` aponta para a alternativa certa e escreva o comentário (`exp`) do gabarito.
- Não invente conteúdo além do que estudamos na conversa, salvo se eu pedir explicitamente.
