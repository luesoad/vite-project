module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
  ],
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
    },
  ],
  plugins: ["svelte", "@typescript-eslint"],
  rules: {
    "no-console": "warn",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
