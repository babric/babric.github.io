import { S as J, i as K, s as Q, h as R, j as g, e as b, b as p, u as U, n as L, d as f, f as W, g as d, k as z, l as m, o as X, a as Z, p as B, q as $, z as C, r as x } from "./index.f86df1ed.js";
import { a as ee, b as te, d as le } from "./Api.8bbfec3a.js";
function D(n, t, r) {
  const l = n.slice();
  return l[7] = t[r], l;
}
function ne(n) {
  let t, r, l = n[10].message + "", a, o, i;
  return {
    c() {
      t = b("p"), r = d("Error: "), a = d(l), o = g(), i = b("p"), i.innerHTML = `For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.`, z(t, "color", "red");
    },
    m(s, k) {
      p(s, t, k), m(t, r), m(t, a), p(s, o, k), p(s, i, k);
    },
    p: L,
    d(s) {
      s && f(t), s && f(o), s && f(i);
    }
  };
}
function se(n) {
  let t, r, l, a, o, i, s, k, h, v, y, E, S, F, H, M, q, T, A, V, G, N, O, j, P, w = n[3], c = [];
  for (let e = 0; e < w.length; e += 1)
    c[e] = I(D(n, w, e));
  return {
    c() {
      t = b("p"), r = d(`Minecraft Version:
        `), l = b("select");
      for (let e = 0; e < c.length; e += 1)
        c[e].c();
      a = g(), o = b("div"), i = b("pre"), s = b("code"), k = d(`
minecraft_version=`), h = d(n[0]), v = d(`
yarn_mappings=`), y = d(n[1]), E = d(`
loader_version=`), S = d(n[2]), F = d(`
        `), H = g(), M = b("h4"), M.textContent = "Automatically update mappings", q = g(), T = b("p"), T.innerHTML = 'Mappings can be auto updated by using the following command. See the <a href="https://fabricmc.net/wiki/tutorial:migratemappings">wiki page</a> for more help.', A = g(), V = b("code"), G = d('gradlew migrateMappings --mappings "'), N = d(n[1]), O = d('"'), z(l, "min-width", "200px"), n[0] === void 0 && X(() => n[4].call(l)), z(o, "margin-bottom", "15px"), Z(V, "class", "copy-code svelte-sbpww1");
    },
    m(e, u) {
      p(e, t, u), m(t, r), m(t, l);
      for (let _ = 0; _ < c.length; _ += 1)
        c[_].m(l, null);
      B(l, n[0]), p(e, a, u), p(e, o, u), m(o, i), m(i, s), m(s, k), m(s, h), m(s, v), m(s, y), m(s, E), m(s, S), m(s, F), p(e, H, u), p(e, M, u), p(e, q, u), p(e, T, u), p(e, A, u), p(e, V, u), m(V, G), m(V, N), m(V, O), j || (P = $(l, "change", n[4]), j = !0);
    },
    p(e, u) {
      if (u & 8) {
        w = e[3];
        let _;
        for (_ = 0; _ < w.length; _ += 1) {
          const Y = D(e, w, _);
          c[_] ? c[_].p(Y, u) : (c[_] = I(Y), c[_].c(), c[_].m(l, null));
        }
        for (; _ < c.length; _ += 1)
          c[_].d(1);
        c.length = w.length;
      }
      u & 9 && B(l, e[0]), u & 1 && C(h, e[0]), u & 2 && C(y, e[1]), u & 4 && C(S, e[2]), u & 2 && C(N, e[1]);
    },
    d(e) {
      e && f(t), x(c, e), e && f(a), e && f(o), e && f(H), e && f(M), e && f(q), e && f(T), e && f(A), e && f(V), j = !1, P();
    }
  };
}
function I(n) {
  let t, r = n[7] + "", l;
  return {
    c() {
      t = b("option"), l = d(r), t.__value = n[7], t.value = t.__value;
    },
    m(a, o) {
      p(a, t, o), m(t, l);
    },
    p: L,
    d(a) {
      a && f(t);
    }
  };
}
function oe(n) {
  let t;
  return {
    c() {
      t = b("p"), t.textContent = "Loading versions..";
    },
    m(r, l) {
      p(r, t, l);
    },
    p: L,
    d(r) {
      r && f(t);
    }
  };
}
function ie(n) {
  let t, r, l, a, o = {
    ctx: n,
    current: null,
    token: null,
    hasCatch: !0,
    pending: oe,
    then: se,
    catch: ne,
    value: 3,
    error: 10
  };
  return R(n[3], o), {
    c() {
      o.block.c(), t = g(), r = b("h4"), r.textContent = "Loom", l = g(), a = b("p"), a.innerHTML = "The recommended loom version is <strong>1.1-SNAPSHOT</strong>. This is usually defined near the top of your  build.gradle file.";
    },
    m(i, s) {
      o.block.m(i, o.anchor = s), o.mount = () => t.parentNode, o.anchor = t, p(i, t, s), p(i, r, s), p(i, l, s), p(i, a, s);
    },
    p(i, [s]) {
      n = i, U(o, n, s);
    },
    i: L,
    o: L,
    d(i) {
      o.block.d(i), o.token = null, o = null, i && f(t), i && f(r), i && f(l), i && f(a);
    }
  };
}
function re(n, t, r) {
  let l, a, o, i = ee().then((h) => (r(0, l = h.find((v) => v.stable).version), h.map((v) => v.version)));
  te().then((h) => (r(2, o = h.find((v) => v.stable).version), h));
  const s = le();
  function k() {
    l = W(this), r(0, l), r(3, i);
  }
  return n.$$.update = () => {
    n.$$.dirty & 1 && s.then((h) => {
      var v;
      return r(1, a = ((v = h.find((y) => y.gameVersion == l)) == null ? void 0 : v.version) || "unknown");
    });
  }, [
    l,
    a,
    o,
    i,
    k
  ];
}
class fe extends J {
  constructor(t) {
    super(), K(this, t, re, ie, Q, {});
  }
}
export {
  fe as default
};
