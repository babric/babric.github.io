// @ts-check
import { fetchInstallerVersions } from "../js/meta.mjs";

const main = document.querySelector("#download");

const loading = document.createTextNode("Loading...");
main.append(loading);

(async () => {
    const versions = await fetchInstallerVersions();
    const latest = versions[0];

    main.removeChild(loading);

    const template = document.querySelector("template").content;
    template.querySelector("#version").append(latest.version);
    (/** @type {HTMLAnchorElement} */ (template.querySelector("#jar-download"))).href = latest.url;
    (/** @type {HTMLAnchorElement} */ (template.querySelector("#exe-download"))).href = latest.url.replace(".jar", ".exe");
    main.appendChild(template);
})();