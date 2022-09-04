module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
  },
};
