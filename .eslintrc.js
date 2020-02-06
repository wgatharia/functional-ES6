module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins:[
    'immutable',
  ],
  rules: {
    "immutable/no-mutation": 2,
    "comma-dangle": 2,
    "linebreak-style": 0,
    "indent": ["error", 4]
  },
};
