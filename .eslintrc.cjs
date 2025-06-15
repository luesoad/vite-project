module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-plugin-svelte/recommended",
  ],
  rules: {
    "no-console": "warn",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "svelte/no-at-html-tags": "off",
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".svelte"],
        ecmaVersion: 2020,
        sourceType: "module",
      },
      rules: {
        "svelte/no-at-html-tags": "off",
      },
    },
  ],
  plugins: ["svelte", "@typescript-eslint"],
};
