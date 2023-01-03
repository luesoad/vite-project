const sveltePreprocess = require("svelte-preprocess");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: sveltePreprocess(),
};
