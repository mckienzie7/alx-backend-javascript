module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended', // Use ESLint's recommended rules for basic linting
    'plugin:react/recommended' // Use ESLint rules for React development
  ],
  parserOptions: {
    ecmaVersion: 12, // Use ECMAScript 2021 syntax
    sourceType: 'module' // Allow the use of ES6 modules
  },
  rules: {
    // Additional rules can be added here based on your coding standards
  }
};
