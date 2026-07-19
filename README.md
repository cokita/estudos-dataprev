# Estudos DataPrev — sistema de simulados

App web (HTML/CSS/JS puro) para estudar por **Assunto → Matéria → Simulado**, com login Google e respostas salvas no Firestore. Já vem com o simulado de **LGPD** (12 questões).

Projeto Firebase: **dataprev-ba87e**

---

## O que já está pronto
- Projeto Firebase criado ✅
- Firestore criado ✅
- Config já colada em `public/js/firebase-config.js` ✅

## Falta fazer (3 passos)

### 1. Ligar o login com Google
No console do Firebase → **Authentication** → **Get started** → aba **Sign-in method** → **Google** → ativar → escolher um e-mail de suporte → salvar.

### 2. Instalar a ferramenta do Firebase (uma vez só)
No terminal do seu computador:
```
npm install -g firebase-tools
firebase login
```
(`firebase login` abre o navegador pra você entrar com a mesma conta Google do projeto.)

### 3. Publicar
Dentro da pasta `estudos-dataprev`:
```
firebase deploy
```
Isso publica **o site** e as **regras do Firestore** (`firestore.rules`). No fim ele mostra o link, algo como:
`https://dataprev-ba87e.web.app`

Pronto — abre o link, clica em **Entrar com Google** e faz o primeiro simulado. As respostas ficam salvas na sua conta e você pode **revisar** ou **refazer** quando quiser.

---

## Como adicionar conteúdo (novo!)
O conteúdo agora é modular, em `conteudo/`. Você (ou o Claude, em outra sessão) adiciona um **arquivo pequeno** e roda o build — sem mexer no `content.js`, que é gerado.

- Novo simulado: crie `conteudo/simulados/<id>.json` (com `materiaId`).
- Nova matéria: crie `conteudo/materias/<id>.json` e some o id em `conteudo/assuntos.json`.
- Depois: `node scripts/build-content.mjs` e faça o push.

O passo a passo detalhado e os formatos estão em **CLAUDE.md** (na raiz) — é o guia que as sessões do Claude leem automaticamente.

O deploy é **automático**: todo push na `main` dispara o GitHub Actions, que gera o `content.js` e publica no Firebase. Não precisa mais rodar `firebase deploy` na mão.

## Estrutura dos arquivos
```
estudos-dataprev/
├── firebase.json          → config de hosting + firestore
├── firestore.rules        → cada usuário só acessa as próprias respostas
├── .firebaserc            → aponta pro projeto dataprev-ba87e
└── public/
    ├── index.html
    ├── styles.css
    └── js/
        ├── content.js         → OS SIMULADOS (é aqui que a gente cresce)
        ├── firebase-config.js → chaves do seu projeto
        ├── storage.js         → login + salvar/ler respostas
        └── app.js             → telas e lógica dos simulados
```

## Detalhes
- **Modo local:** se abrir o `index.html` sem deploy/login, o app funciona e salva as respostas só naquele navegador. Com login Google, salva na nuvem e sincroniza entre dispositivos.
- **Segurança:** as regras (`firestore.rules`) garantem que só você lê e escreve as suas tentativas (`users/{seu-uid}/attempts`).
- **Sem custo:** hosting e Firestore cabem folgado no plano gratuito (Spark) do Firebase pra uso pessoal.
