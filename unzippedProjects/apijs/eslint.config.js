import globals from "globals";
import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.node },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/extensions": ["error", "always", { js: "always" }],
      "no-unused-vars": ["warn"],
    },
  },
];
