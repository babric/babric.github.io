import { S as qe, i as Fe, s as Je, h as Me, e as i, b as p, u as Ue, t as Le, c as Se, d as v, f as re, g as I, j as m, k as O, l as s, n as F, v as ze, a as _, o as oe, p as H, w as Ge, q as se, z as ge, r as ae, x as Te, A as Ae } from "./index.f86df1ed.js";
import { a as De, b as Ee, g as Be } from "./Api.8bbfec3a.js";
import He from "./DownloadIcon.e96a5a36.js";
function ke(t, e, r) {
  const o = t.slice();
  return o[11] = e[r], o;
}
function we(t, e, r) {
  const o = t.slice();
  return o[11] = e[r], o;
}
function Ce(t, e, r) {
  const o = t.slice();
  return o[11] = e[r], o;
}
function Oe(t) {
  let e, r, o = t[18].message + "", c, a, d;
  return {
    c() {
      e = i("p"), r = I("Error: "), c = I(o), a = m(), d = i("p"), d.innerHTML = `For support please visit one of our
    <a href="/discuss">community discussion</a>
    groups.`, O(e, "color", "red");
    },
    m(f, h) {
      p(f, e, h), s(e, r), s(e, c), p(f, a, h), p(f, d, h);
    },
    p: F,
    i: F,
    o: F,
    d(f) {
      f && v(e), f && v(a), f && v(d);
    }
  };
}
function Pe(t) {
  let e, r, o, c, a, d, f, h, z, V, K, J, G, N, j, L, b, C, T, ie, ce, R, P, fe, W, Q, Y, S, Z, ue, y, _e, X, he, $, x, q, ee, de, le, me, A, pe, te, ve, M, ne, be, D = t[10].game, g = [];
  for (let l = 0; l < D.length; l += 1)
    g[l] = Ve(Ce(t, D, l));
  let E = t[10].loader, k = [];
  for (let l = 0; l < E.length; l += 1)
    k[l] = je(we(t, E, l));
  let B = t[10].installer, w = [];
  for (let l = 0; l < B.length; l += 1)
    w[l] = Ie(ke(t, B, l));
  return T = new He({}), {
    c() {
      e = i("div"), r = i("div"), o = i("label"), o.textContent = "Minecraft Version:", c = m(), a = i("select");
      for (let l = 0; l < g.length; l += 1)
        g[l].c();
      d = m(), f = i("div"), h = i("label"), h.textContent = "Fabric Loader Version:", z = m(), V = i("select");
      for (let l = 0; l < k.length; l += 1)
        k[l].c();
      K = m(), J = i("div"), G = i("label"), G.textContent = "Installer Version:", N = m(), j = i("select");
      for (let l = 0; l < w.length; l += 1)
        w[l].c();
      L = m(), b = i("div"), C = i("a"), ze(T.$$.fragment), ie = I(" Executable Server (.jar)"), ce = m(), R = i("p"), P = i("a"), fe = I("Download installer for older versions or manual installation"), W = m(), Q = i("p"), Q.textContent = "The executable jar is a small launcher that will start the Fabric enabled Minecraft server using the versions specified above. There is no need to use an installer when using this method.", Y = m(), S = i("div"), Z = i("h4"), Z.textContent = "CLI download:", ue = m(), y = i("p"), y.textContent = "Use the following command to download the executable server launcher to the current directory", _e = m(), X = i("code"), he = I("curl -OJ "), $ = I(t[5]), x = m(), q = i("div"), ee = i("h4"), ee.textContent = "Launch command:", de = m(), le = i("p"), le.textContent = "Use the following command to run the executable server launcher with 2GB of ram. After a small wait the Minecraft server will be ready.", me = m(), A = i("code"), pe = I("java -Xmx2G -jar "), te = I(t[4]), ve = I(" nogui"), _(o, "for", "minecraft-version"), _(a, "id", "minecraft-version"), O(a, "min-width", "200px"), t[0] === void 0 && oe(() => t[7].call(a)), _(r, "class", "form-line"), _(h, "for", "loader-version"), _(V, "id", "loader-version"), O(V, "min-width", "200px"), t[1] === void 0 && oe(() => t[8].call(V)), _(f, "class", "form-line"), _(G, "for", "installer-version"), _(j, "id", "installer-version"), O(j, "min-width", "200px"), t[2] === void 0 && oe(() => t[9].call(j)), _(J, "class", "form-line"), _(C, "class", "button"), _(C, "href", t[5]), _(b, "class", "download"), _(P, "href", t[3]), _(e, "class", "download"), _(X, "class", "svelte-l8qzb7"), O(S, "margin-bottom", "15px"), _(A, "class", "svelte-l8qzb7"), O(q, "margin-bottom", "15px");
    },
    m(l, u) {
      p(l, e, u), s(e, r), s(r, o), s(r, c), s(r, a);
      for (let n = 0; n < g.length; n += 1)
        g[n].m(a, null);
      H(a, t[0]), s(e, d), s(e, f), s(f, h), s(f, z), s(f, V);
      for (let n = 0; n < k.length; n += 1)
        k[n].m(V, null);
      H(V, t[1]), s(e, K), s(e, J), s(J, G), s(J, N), s(J, j);
      for (let n = 0; n < w.length; n += 1)
        w[n].m(j, null);
      H(j, t[2]), s(e, L), s(e, b), s(b, C), Ge(T, C, null), s(C, ie), s(e, ce), s(e, R), s(R, P), s(P, fe), p(l, W, u), p(l, Q, u), p(l, Y, u), p(l, S, u), s(S, Z), s(S, ue), s(S, y), s(S, _e), s(S, X), s(X, he), s(X, $), p(l, x, u), p(l, q, u), s(q, ee), s(q, de), s(q, le), s(q, me), s(q, A), s(A, pe), s(A, te), s(A, ve), M = !0, ne || (be = [
        se(a, "change", t[7]),
        se(V, "change", t[8]),
        se(j, "change", t[9])
      ], ne = !0);
    },
    p(l, u) {
      if (u & 64) {
        D = l[10].game;
        let n;
        for (n = 0; n < D.length; n += 1) {
          const U = Ce(l, D, n);
          g[n] ? g[n].p(U, u) : (g[n] = Ve(U), g[n].c(), g[n].m(a, null));
        }
        for (; n < g.length; n += 1)
          g[n].d(1);
        g.length = D.length;
      }
      if (u & 65 && H(a, l[0]), u & 64) {
        E = l[10].loader;
        let n;
        for (n = 0; n < E.length; n += 1) {
          const U = we(l, E, n);
          k[n] ? k[n].p(U, u) : (k[n] = je(U), k[n].c(), k[n].m(V, null));
        }
        for (; n < k.length; n += 1)
          k[n].d(1);
        k.length = E.length;
      }
      if (u & 66 && H(V, l[1]), u & 64) {
        B = l[10].installer;
        let n;
        for (n = 0; n < B.length; n += 1) {
          const U = ke(l, B, n);
          w[n] ? w[n].p(U, u) : (w[n] = Ie(U), w[n].c(), w[n].m(j, null));
        }
        for (; n < w.length; n += 1)
          w[n].d(1);
        w.length = B.length;
      }
      u & 68 && H(j, l[2]), (!M || u & 32) && _(C, "href", l[5]), (!M || u & 8) && _(P, "href", l[3]), (!M || u & 32) && ge($, l[5]), (!M || u & 16) && ge(te, l[4]);
    },
    i(l) {
      M || (Le(T.$$.fragment, l), M = !0);
    },
    o(l) {
      Se(T.$$.fragment, l), M = !1;
    },
    d(l) {
      l && v(e), ae(g, l), ae(k, l), ae(w, l), Te(T), l && v(W), l && v(Q), l && v(Y), l && v(S), l && v(x), l && v(q), ne = !1, Ae(be);
    }
  };
}
function Ve(t) {
  let e, r = t[11].version + "", o;
  return {
    c() {
      e = i("option"), o = I(r), e.__value = t[11].version, e.value = e.__value;
    },
    m(c, a) {
      p(c, e, a), s(e, o);
    },
    p: F,
    d(c) {
      c && v(e);
    }
  };
}
function je(t) {
  let e, r = t[11].version + "", o;
  return {
    c() {
      e = i("option"), o = I(r), e.__value = t[11].version, e.value = e.__value;
    },
    m(c, a) {
      p(c, e, a), s(e, o);
    },
    p: F,
    d(c) {
      c && v(e);
    }
  };
}
function Ie(t) {
  let e, r = t[11].version + "", o;
  return {
    c() {
      e = i("option"), o = I(r), e.__value = t[11].version, e.value = e.__value;
    },
    m(c, a) {
      p(c, e, a), s(e, o);
    },
    p: F,
    d(c) {
      c && v(e);
    }
  };
}
function Xe(t) {
  let e;
  return {
    c() {
      e = i("p"), e.textContent = "Loading versions..";
    },
    m(r, o) {
      p(r, e, o);
    },
    p: F,
    i: F,
    o: F,
    d(r) {
      r && v(e);
    }
  };
}
function Ke(t) {
  let e, r, o = {
    ctx: t,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Xe,
    then: Pe,
    catch: Oe,
    value: 10,
    error: 18,
    blocks: [, , ,]
  };
  return Me(t[6], o), {
    c() {
      e = i("main"), o.block.c();
    },
    m(c, a) {
      p(c, e, a), o.block.m(e, o.anchor = null), o.mount = () => e, o.anchor = null, r = !0;
    },
    p(c, [a]) {
      t = c, Ue(o, t, a);
    },
    i(c) {
      r || (Le(o.block), r = !0);
    },
    o(c) {
      for (let a = 0; a < 3; a += 1) {
        const d = o.blocks[a];
        Se(d);
      }
      r = !1;
    },
    d(c) {
      c && v(e), o.block.d(), o.token = null, o = null;
    }
  };
}
function Ne(t, e, r) {
  let o, c, a, d, f, h, z = Promise.all([De(), Ee(), Be()]).then(([G, N, j]) => {
    const L = {
      game: G,
      loader: N.filter((b) => {
        const C = b.version.split(".");
        return parseInt(C[0]) > 0 || parseInt(C[1]) >= 12;
      }),
      installer: j.filter((b) => {
        const C = b.version.split(".");
        return parseInt(C[0]) > 0 || parseInt(C[1]) >= 8;
      })
    };
    return r(0, d = (L.game.find((b) => b.stable) || L.game[0]).version), r(1, f = (L.loader.find((b) => b.stable) || L.loader[0]).version), r(2, h = (L.installer.find((b) => b.stable) || L.installer[0]).version), L;
  });
  function V() {
    d = re(this), r(0, d), r(6, z);
  }
  function K() {
    f = re(this), r(1, f), r(6, z);
  }
  function J() {
    h = re(this), r(2, h), r(6, z);
  }
  return t.$$.update = () => {
    t.$$.dirty & 7 && r(5, o = `https://meta.babric.glass-launcher.net/v2/versions/loader/${d}/${f}/${h}/server/jar`), t.$$.dirty & 7 && r(4, c = `fabric-server-mc.${d}-loader.${f}-launcher.${h}.jar`), t.$$.dirty & 4 && r(3, a = `https://maven.glass-launcher.net/babric/babric/fabric-installer/${h}/fabric-installer-${h}.jar`);
  }, [
    d,
    f,
    h,
    a,
    c,
    o,
    z,
    V,
    K,
    J
  ];
}
class Ye extends qe {
  constructor(e) {
    super(), Fe(this, e, Ne, Ke, Je, {});
  }
}
export {
  Ye as default
};
