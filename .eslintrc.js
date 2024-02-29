module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["standard", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["react", "prettier"],
  rules: {
    // suppress errors for missing 'import React' in files
    // "react/react-in-jsx-scope": "off",
    "react/react-in-jsx-scope": 0,
    "prettier/prettier": "error",
    quotes: 0,
    "comma-dangle": [2, "always-multiline"],
    trailingComma: 0,
    "css.lint.unknownAtRules": 0,
    semi: 0,
  },
};
