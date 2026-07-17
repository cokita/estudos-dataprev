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

  let attempts = [];   // cache das tentativas do usuário

  // ---------- helpers ----------
  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
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
    $app().innerHTML =
      '<div class="page-head"><h1>Assuntos do edital</h1><p class="sub">Escolha um assunto para ver as matérias e simulados.</p></div>' +
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

    // flashcards
    const fcHtml = (m.flashcards && m.flashcards.length) ? (
      '<div class="block-head"><h2><i class="ti ti-cards"></i> Flashcards</h2>' +
      '<span class="hint">Clique no cartão para revelar a resposta · ' + m.flashcards.length + " cartões</span></div>" +
      '<div class="fc-grid">' + m.flashcards.map((f, i) => (
        '<button class="fc" data-fc="' + i + '" aria-expanded="false">' +
          '<span class="fc-tema">' + esc(f.tema) + "</span>" +
          '<span class="fc-q">' + esc(f.pergunta) + "</span>" +
          '<span class="fc-a">' + esc(f.resposta) + "</span>" +
          '<span class="fc-flip"><i class="ti ti-rotate-clockwise"></i> ver resposta</span>' +
        "</button>"
      )).join("") + "</div>"
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

    document.querySelectorAll(".fc").forEach((el) => {
      el.addEventListener("click", () => {
        const open = el.classList.toggle("open");
        el.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
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
        '<p class="qtext">' + (qi + 1) + ". " + esc(q.text) + "</p>" +
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
      ? '<b><i class="ti ti-check"></i> Acertou.</b> ' + esc(q.exp)
      : '<b><i class="ti ti-x"></i> ' + (chosen === null ? "Não respondida." : "Você marcou " + (q.type === "mc" ? letter(chosen) : (q.options[chosen] || "")) + ".") + " Correta em verde.</b> " + esc(q.exp);
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

  // ---------- roteador ----------
  function route() {
    const h = (location.hash || "#/").replace(/^#/, "");
    const parts = h.split("/").filter(Boolean); // ex: ["s","lgpd-01","rev","abc"]
    window.scrollTo(0, 0);
    if (parts.length === 0) return renderHome();
    switch (parts[0]) {
      case "a": return renderAssunto(parts[1]);
      case "m": return renderMateria(parts[1]);
      case "s":
        if (parts[2] === "rev") return renderReview(parts[1], decodeURIComponent(parts[3] || ""));
        return renderSimulado(parts[1]);
      default: return renderHome();
    }
  }

  // ---------- dados ----------
  function refreshAttempts() {
    return window.STORE.getAllAttempts().then((list) => { attempts = list || []; }).catch((e) => { console.error(e); attempts = []; });
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
