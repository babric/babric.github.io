const s = (e, t) => {
  const n = e[t];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((r, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
function o(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.e96a5a36.js"), "./lib/Installer.svelte": () => import("./Installer.f7bf14af.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.6c9fc45e.js"), "./lib/Server.svelte": () => import("./Server.688710b3.js"), "./lib/Versions.svelte": () => import("./Versions.2a426285.js") }), `./lib/${e}.svelte`);
}
const c = o("Installer"), l = o("Server"), a = o("Versions");
let m = {
  Installer: c,
  Server: l,
  Versions: a
};
function u() {
  for (const e of document.getElementsByClassName("fabric-component")) {
    if (!(e instanceof HTMLElement))
      continue;
    const t = e.dataset.component;
    if (!t)
      throw new Error("Missing data-component attribute");
    const n = m[t];
    if (!n)
      throw new Error("Unknown component: " + t);
    n().then((r) => {
      new r.default({
        target: e
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", u);
