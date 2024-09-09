import {BasePath} from "../packages/svelte-spa-router/constants.js"

/**
 * @typedef {Object} Location
 * @property {string} location - Location (page/view), for example `/book`
 * @property {string} [querystring] - Querystring from the hash, as a string not parsed
 */
export function joinPaths(...paths) {
	if (!paths || !paths.length) {
		return BasePath
	}

	return paths
		.map(x => x.trim())
		.filter(x => x)
		.map((x, i, arr) => {
			if (i === 0) {
				return x.replace(/\/$/, "")
			} else if (i < arr.length - 1) {
				return x.replace(/(^\/|\/$)/, "")
			} else {
				return x.replace(/^\//, "")
			}
		})
		.map((x) => x.trim())
		.filter(x => x)
		.join("/")
}
