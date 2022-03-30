// @ts-check

export const META_URL = "https://meta.babric.glass-launcher.net";
export const GAME_VERSIONS_ENDPOINT = META_URL + "/v2/versions/game";
export const INSTALLER_VERSIONS_ENDPOINT = META_URL + "/v2/versions/installer";
export const YARN_VERSIONS_ENDPOINT = META_URL + "/v2/versions/yarn/";
export const INTERMEDIARY_VERSIONS_ENDPOINT = META_URL + "/v2/versions/intermediary/";
export const LOADER_VERSIONS_ENDPOINT = META_URL + "/v2/versions/loader/";

// https://github.com/jsdoc/jsdoc/issues/1199 scuff
/**
 * @typedef {Object} BaseVersion
 * @property {string} version
 * @property {boolean} stable
 * 
 * @typedef {BaseVersion & { maven: string }} MavenVersion
 * @typedef {MavenVersion & { url: string }} MavenUrlVersion
 * @typedef {MavenVersion & { separator: string, build: number }} MavenBuildVersion
 * @typedef {MavenBuildVersion & { gameVersion: string }} MavenBuildGameVersion
 * 
 * @typedef {Object} LoaderInfo
 * @property {MavenBuildVersion} loader
 * @property {MavenVersion} intermediary
 * @property {any} launcherMeta
 */

/** @return {Promise<BaseVersion[]>} */
export async function fetchGameVersions() {
    return await (await fetch(GAME_VERSIONS_ENDPOINT)).json();
}

/** @return {Promise<MavenUrlVersion[]>} */
export async function fetchInstallerVersions() {
    return await (await fetch(INSTALLER_VERSIONS_ENDPOINT)).json();
}

/**
 * @return {Promise<MavenBuildGameVersion[]>} 
 * @param {?string} gameVersion
*/
export async function fetchYarnVersions(gameVersion = null) {
    return await (await fetch(YARN_VERSIONS_ENDPOINT + (gameVersion ?? ""))).json();
}

/**
 * @return {Promise<MavenVersion[]>} 
 * @param {?string} gameVersion
*/
export async function fetchIntermediaryVersions(gameVersion = null) {
    return await (await fetch(INTERMEDIARY_VERSIONS_ENDPOINT + (gameVersion ?? ""))).json();
}

/**
 * @return {Promise<LoaderInfo[]>} 
 * @param {?string} gameVersion
*/
export async function fetchLoaderVersions(gameVersion = null) {
    return await (await fetch(LOADER_VERSIONS_ENDPOINT + (gameVersion ?? ""))).json();
}
