// ============================================================
//  Camada de armazenamento
//  - Se o Firebase estiver configurado: login Google + Firestore.
//  - Se não estiver: modo local (salva no navegador), pra testar já.
//  Expõe window.STORE e dá o boot no app quando estiver pronto.
// ============================================================

const cfg = window.FIREBASE_CONFIG || {};
const configured = !!cfg.apiKey && !String(cfg.apiKey).startsWith("COLE_AQUI");
const FB_VER = "10.12.2";
const base = "https://www.gstatic.com/firebasejs/" + FB_VER + "/";

const STORE = {
  mode: configured ? "firebase" : "local",
  user: null,
  _fb: null,

  async init() {
    if (this.mode === "firebase") {
      try {
        const appMod  = await import(base + "firebase-app.js");
        const authMod = await import(base + "firebase-auth.js");
        const fsMod   = await import(base + "firebase-firestore.js");
        const app  = appMod.initializeApp(cfg);
        const auth = authMod.getAuth(app);
        const db   = fsMod.getFirestore(app);
        this._fb = { app, auth, db, authMod, fsMod };
        authMod.onAuthStateChanged(auth, (u) => {
          this.user = u || null;
          if (window.App && window.App.onAuthChanged) window.App.onAuthChanged(this.user);
        });
      } catch (e) {
        console.error("Firebase falhou, caindo para modo local:", e);
        this.mode = "local";
      }
    }
    return this;
  },

  async signIn() {
    if (this.mode !== "firebase") return;
    const { authMod, auth } = this._fb;
    const provider = new authMod.GoogleAuthProvider();
    await authMod.signInWithPopup(auth, provider);
  },

  async signOut() {
    if (this.mode !== "firebase") return;
    const { authMod, auth } = this._fb;
    await authMod.signOut(auth);
  },

  async saveAttempt(attempt) {
    if (this.mode === "firebase" && this.user) {
      const { fsMod, db } = this._fb;
      const col = fsMod.collection(db, "users", this.user.uid, "attempts");
      const ref = await fsMod.addDoc(col, Object.assign({}, attempt, { createdAt: fsMod.serverTimestamp() }));
      return ref.id;
    }
    const all = this._localAll();
    const id = "loc-" + Date.now();
    all.push(Object.assign({ id: id, createdAt: new Date().toISOString() }, attempt));
    localStorage.setItem(this._lkey(), JSON.stringify(all));
    return id;
  },

  async getAttempts(simuladoId) {
    const all = await this.getAllAttempts();
    return all.filter((a) => a.simuladoId === simuladoId);
  },

  async getAllAttempts() {
    if (this.mode === "firebase" && this.user) {
      const { fsMod, db } = this._fb;
      const col = fsMod.collection(db, "users", this.user.uid, "attempts");
      const q = fsMod.query(col, fsMod.orderBy("createdAt", "desc"));
      const snap = await fsMod.getDocs(q);
      return snap.docs.map((d) => {
        const data = d.data();
        let iso = null;
        try { iso = data.createdAt && data.createdAt.toDate ? data.createdAt.toDate().toISOString() : null; } catch (e) {}
        return Object.assign({ id: d.id }, data, { createdAt: iso });
      });
    }
    return this._localAll().sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
  },

  // ---- progresso do Mapa de Estudos: { topicoId: "estudando" | "revisar" | "dominado" } ----
  async getMapaProgress() {
    if (this.mode === "firebase" && this.user) {
      try {
        const { fsMod, db } = this._fb;
        const ref = fsMod.doc(db, "users", this.user.uid, "meta", "mapa");
        const snap = await fsMod.getDoc(ref);
        return (snap.exists() ? (snap.data().topicos || {}) : {});
      } catch (e) {
        console.error("Falha ao ler progresso do mapa:", e);
        return this._localMapa();
      }
    }
    return this._localMapa();
  },

  async setMapaStatus(topicoId, status) {
    const all = await this.getMapaProgress();
    if (!status || status === "nao-iniciado") delete all[topicoId];
    else all[topicoId] = status;
    if (this.mode === "firebase" && this.user) {
      try {
        const { fsMod, db } = this._fb;
        const ref = fsMod.doc(db, "users", this.user.uid, "meta", "mapa");
        await fsMod.setDoc(ref, { topicos: all, updatedAt: fsMod.serverTimestamp() }, { merge: false });
        return all;
      } catch (e) {
        console.error("Falha ao salvar progresso do mapa:", e);
      }
    }
    localStorage.setItem(this._mkey(), JSON.stringify(all));
    return all;
  },

  _mkey() {
    const uid = (this.mode === "firebase" && this.user) ? this.user.uid : "local";
    return "estudos_mapa_" + uid;
  },

  _localMapa() {
    try { return JSON.parse(localStorage.getItem(this._mkey()) || "{}"); }
    catch (e) { return {}; }
  },

  _lkey() {
    const uid = (this.mode === "firebase" && this.user) ? this.user.uid : "local";
    return "estudos_attempts_" + uid;
  },

  _localAll() {
    try { return JSON.parse(localStorage.getItem(this._lkey()) || "[]"); }
    catch (e) { return []; }
  }
};

window.STORE = STORE;
STORE.init().then(() => { if (window.App && window.App.boot) window.App.boot(); });
