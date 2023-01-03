import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import postcss from "./postcss.config.js";
import pages from "vite-plugin-pages-svelte";
const production = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      hydratable: true,
      dev: !production,
      css: (css) => {
        css.write("public/build/bundle.css");
      },
    }),
    pages(),
  ],
 // optimizeDeps: { exclude: ["svelte-router"] },
  css: { postcss },
});
