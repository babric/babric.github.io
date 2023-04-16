const e = ["https://meta.babric.glass-launcher.net"];
async function c() {
  return s(e, "/v2/versions/installer");
}
async function i() {
  return s(e, "/v2/versions/game");
}
async function u() {
  return s(e, "/v2/versions/loader");
}
async function f() {
  return s(e, "/v2/versions/yarn");
}
async function l(n) {
  return (await s(
    e,
    `/v2/versions/yarn/${n}?limit=1`
  ))[0];
}
async function s(n, t) {
  return await (await o(n, t)).json();
}
async function o(n, t) {
  for (var a of n)
    try {
      const r = await fetch(a + t);
      if (r.ok)
        return r;
      console.error(await r.text());
    } catch (r) {
      console.error(r);
    }
  throw new Error(`Failed to fetch: ${n[0] + t}`);
}
export {
  i as a,
  u as b,
  l as c,
  f as d,
  c as g
};
