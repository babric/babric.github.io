// @ts-check
import { fetchGameVersions, fetchYarnVersions, fetchLoaderVersions } from "./js/meta.mjs";

const main = document.querySelector("#latest-versions");

const loading = document.createTextNode("Loading...");
main.append(loading);

class CodeWriter {
    /** @param {HTMLElement} code */
    constructor(code) {
        this.code = code;
    }

    appendSpan(text, className) {
        const span = document.createElement("span");
        span.innerText = text;
        span.className = className;
        this.code.appendChild(span);
    }

    appendBr() {
        this.code.appendChild(document.createElement("br"));
    }

    append(key, value) {
        this.appendSpan(key, "key");
        this.appendSpan("=", "seperator");
        this.appendSpan(value, "value");
        this.appendBr();
    }
}

(async () => {
    const versions = await fetchGameVersions();

    main.removeChild(loading);

    const template = document.querySelector("template").content;

    const select = template.querySelector("select");

    for (const version of versions) {
        const option = document.createElement("option");
        option.setAttribute("value", option.innerText = version.version);
        select.append(option);
    }

    /** @type {HTMLElement} */
    const properties = template.querySelector(".properties");

    /** @type {HTMLElement} */
    const migrateMappings = template.querySelector("#migrateMappings");

    const update = async () => {
        const version = select.value;

        const yarn = (await fetchYarnVersions(version))[0];
        const loader = (await fetchLoaderVersions(version))[0].loader;

        const propertiesWriter = new CodeWriter(properties);
        propertiesWriter.append("minecraft_version", version);
        propertiesWriter.append("yarn_mappings", yarn.version);
        propertiesWriter.append("loader_version", loader.version);

        migrateMappings.innerText = `gradlew migrateMappings --mappings "${yarn.version}"`;
    };

    select.addEventListener("change", update);
    await update();

    main.appendChild(template);
})();