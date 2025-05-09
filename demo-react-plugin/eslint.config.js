const react = require("eslint-plugin-react") ;
const reactHooks =  require("eslint-plugin-react-hooks");

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error", // Enforce the Rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in useEffect
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];