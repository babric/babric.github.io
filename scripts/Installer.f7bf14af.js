import { S as A, i as H, s as J, h as W, e as b, b as u, u as q, t as C, c as D, d as _, f as R, g as $, j, k as E, l as w, n as v, a as h, m as U, o as z, p as I, q as F, r as B, v as M, w as N, x as O, y as G } from "./index.f86df1ed.js";
import { g as K } from "./Api.8bbfec3a.js";
import T from "./DownloadIcon.e96a5a36.js";
function V(i, e, l) {
  const t = i.slice();
  return t[9] = e[l], t;
}
function P(i) {
  let e, l, t = i[13].message + "", n, r, f;
  return {
    c() {
      e = b("p"), l = $("Error: "), n = $(t), r = j(), f = b("p"), f.innerHTML = `For support please visit one of our
      <a href="/discuss">community discussion</a>
      groups.`, E(e, "color", "red");
    },
    m(a, p) {
      u(a, e, p), w(e, l), w(e, n), u(a, r, p), u(a, f, p);
    },
    p: v,
    i: v,
    o: v,
    d(a) {
      a && _(e), a && _(r), a && _(f);
    }
  };
}
function Q(i) {
  let e, l, t, n, r, f, a;
  function p(d, y) {
    return d[0] ? Y : X;
  }
  let c = p(i), o = c(i);
  const s = [te, le], k = [];
  function m(d, y) {
    return d[2] ? 0 : 1;
  }
  return r = m(i), f = k[r] = s[r](i), {
    c() {
      o.c(), e = j(), l = b("div"), t = b("p"), t.textContent = `The Minecraft and Fabric Loader versions can be selected in the installer, this download
        works for every version we support.`, n = j(), f.c(), h(l, "class", "download");
    },
    m(d, y) {
      o.m(d, y), u(d, e, y), u(d, l, y), w(l, t), w(l, n), k[r].m(l, null), a = !0;
    },
    p(d, y) {
      c === (c = p(d)) && o ? o.p(d, y) : (o.d(1), o = c(d), o && (o.c(), o.m(e.parentNode, e))), f.p(d, y);
    },
    i(d) {
      a || (C(f), a = !0);
    },
    o(d) {
      D(f), a = !1;
    },
    d(d) {
      o.d(d), d && _(e), d && _(l), k[r].d();
    }
  };
}
function X(i) {
  let e, l = {
    ctx: i,
    current: null,
    token: null,
    hasCatch: !1,
    pending: ee,
    then: g,
    catch: Z,
    value: 12
  };
  return W(i[5](), l), {
    c() {
      e = U(), l.block.c();
    },
    m(t, n) {
      u(t, e, n), l.block.m(t, l.anchor = n), l.mount = () => e.parentNode, l.anchor = e;
    },
    p(t, n) {
      i = t, q(l, i, n);
    },
    d(t) {
      t && _(e), l.block.d(t), l.token = null, l = null;
    }
  };
}
function Y(i) {
  let e, l, t, n, r, f, a, p, c = i[8], o = [];
  for (let s = 0; s < c.length; s += 1)
    o[s] = S(V(i, c, s));
  return {
    c() {
      e = $(`Installer Version:
      `), l = b("select");
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      t = j(), n = b("br"), r = j(), f = b("br"), E(l, "min-width", "200px"), i[1] === void 0 && z(() => i[6].call(l));
    },
    m(s, k) {
      u(s, e, k), u(s, l, k);
      for (let m = 0; m < o.length; m += 1)
        o[m].m(l, null);
      I(l, i[1]), u(s, t, k), u(s, n, k), u(s, r, k), u(s, f, k), a || (p = F(l, "change", i[6]), a = !0);
    },
    p(s, k) {
      if (k & 8) {
        c = s[8];
        let m;
        for (m = 0; m < c.length; m += 1) {
          const d = V(s, c, m);
          o[m] ? o[m].p(d, k) : (o[m] = S(d), o[m].c(), o[m].m(l, null));
        }
        for (; m < o.length; m += 1)
          o[m].d(1);
        o.length = c.length;
      }
      k & 10 && I(l, s[1]);
    },
    d(s) {
      s && _(e), s && _(l), B(o, s), s && _(t), s && _(n), s && _(r), s && _(f), a = !1, p();
    }
  };
}
function Z(i) {
  return { c: v, m: v, p: v, d: v };
}
function g(i) {
  var r;
  let e, l, t = ((r = i[12]) == null ? void 0 : r.stable) && x(i), n = !i[0] && L(i);
  return {
    c() {
      e = b("p"), t && t.c(), l = j(), n && n.c();
    },
    m(f, a) {
      u(f, e, a), t && t.m(e, null), w(e, l), n && n.m(e, null);
    },
    p(f, a) {
      var p;
      (p = f[12]) != null && p.stable && t.p(f, a), f[0] ? n && (n.d(1), n = null) : n ? n.p(f, a) : (n = L(f), n.c(), n.m(e, null));
    },
    d(f) {
      f && _(e), t && t.d(), n && n.d();
    }
  };
}
function x(i) {
  let e, l = i[12].version + "", t, n;
  return {
    c() {
      e = $("Installer Version: "), t = $(l), n = $(" (Latest)");
    },
    m(r, f) {
      u(r, e, f), u(r, t, f), u(r, n, f);
    },
    p: v,
    d(r) {
      r && _(e), r && _(t), r && _(n);
    }
  };
}
function L(i) {
  let e, l, t;
  return {
    c() {
      e = b("a"), e.textContent = "Show other versions", h(e, "href", "#");
    },
    m(n, r) {
      u(n, e, r), l || (t = F(e, "click", G(i[4])), l = !0);
    },
    p: v,
    d(n) {
      n && _(e), l = !1, t();
    }
  };
}
function ee(i) {
  return { c: v, m: v, p: v, d: v };
}
function S(i) {
  let e, l = i[9].version + "", t;
  return {
    c() {
      e = b("option"), t = $(l), e.__value = i[9].url, e.value = e.__value;
    },
    m(n, r) {
      u(n, e, r), w(e, t);
    },
    p: v,
    d(n) {
      n && _(e);
    }
  };
}
function le(i) {
  let e, l, t, n, r, f, a, p, c;
  return l = new T({}), {
    c() {
      e = b("a"), M(l.$$.fragment), t = $(" Download installer (Universal/.JAR)"), n = j(), r = b("p"), f = b("a"), a = $("Download for Windows"), h(e, "class", "button"), h(e, "href", i[1]), h(f, "href", p = i[1].replace(".jar", ".exe"));
    },
    m(o, s) {
      u(o, e, s), N(l, e, null), w(e, t), u(o, n, s), u(o, r, s), w(r, f), w(f, a), c = !0;
    },
    p(o, s) {
      (!c || s & 10) && h(e, "href", o[1]), (!c || s & 10 && p !== (p = o[1].replace(".jar", ".exe"))) && h(f, "href", p);
    },
    i(o) {
      c || (C(l.$$.fragment, o), c = !0);
    },
    o(o) {
      D(l.$$.fragment, o), c = !1;
    },
    d(o) {
      o && _(e), O(l), o && _(n), o && _(r);
    }
  };
}
function te(i) {
  let e, l, t, n, r, f, a, p, c;
  return l = new T({}), {
    c() {
      e = b("a"), M(l.$$.fragment), t = $(" Download for Windows"), r = j(), f = b("p"), a = b("a"), p = $("Download universal jar"), h(e, "class", "button"), h(e, "href", n = i[1].replace(".jar", ".exe")), h(a, "href", i[1]);
    },
    m(o, s) {
      u(o, e, s), N(l, e, null), w(e, t), u(o, r, s), u(o, f, s), w(f, a), w(a, p), c = !0;
    },
    p(o, s) {
      (!c || s & 10 && n !== (n = o[1].replace(".jar", ".exe"))) && h(e, "href", n), (!c || s & 10) && h(a, "href", o[1]);
    },
    i(o) {
      c || (C(l.$$.fragment, o), c = !0);
    },
    o(o) {
      D(l.$$.fragment, o), c = !1;
    },
    d(o) {
      o && _(e), O(l), o && _(r), o && _(f);
    }
  };
}
function ne(i) {
  let e;
  return {
    c() {
      e = b("p"), e.textContent = "Loading versions..";
    },
    m(l, t) {
      u(l, e, t);
    },
    p: v,
    i: v,
    o: v,
    d(l) {
      l && _(e);
    }
  };
}
function oe(i) {
  let e, l, t = {
    ctx: i,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ne,
    then: Q,
    catch: P,
    value: 8,
    error: 13,
    blocks: [, , ,]
  };
  return W(i[3], t), {
    c() {
      e = b("main"), t.block.c();
    },
    m(n, r) {
      u(n, e, r), t.block.m(e, t.anchor = null), t.mount = () => e, t.anchor = null, l = !0;
    },
    p(n, [r]) {
      i = n, q(t, i, r);
    },
    i(n) {
      l || (C(t.block), l = !0);
    },
    o(n) {
      for (let r = 0; r < 3; r += 1) {
        const f = t.blocks[r];
        D(f);
      }
      l = !1;
    },
    d(n) {
      n && _(e), t.block.d(), t.token = null, t = null;
    }
  };
}
function re(i, e, l) {
  const t = navigator.platform == "Win32";
  let n = !1, r = "", f = a();
  async function a() {
    var k;
    const s = await K();
    return l(1, r = ((k = s.find((m) => m.stable)) == null ? void 0 : k.url) ?? ""), s;
  }
  function p() {
    l(0, n = !0);
  }
  async function c() {
    return (await f).find((s) => s.url === r);
  }
  function o() {
    r = R(this), l(1, r), l(3, f);
  }
  return [
    n,
    r,
    t,
    f,
    p,
    c,
    o
  ];
}
class ae extends A {
  constructor(e) {
    super(), H(this, e, re, oe, J, {});
  }
}
export {
  ae as default
};
