'use strict'

const { warn, error, never, always, off, single, all } = require('./constants')

module.exports = {

  extends: 'eslint:recommended',

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },

  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },

  globals: {
    artifacts: true,
    console: true,
    contract: true,
    context: true,
    fetch: true,
    process: true,
    URL: true
  },

  rules: {
    'no-useless-constructor': error,
    'space-infix-ops': error,
    'comma-dangle': [ warn, never ],
    'max-len': off,
    'no-console': off,
    'no-mixed-spaces-and-tabs': error,
    'no-tabs': error,
    'no-trailing-spaces': error,
    'no-undefined': off,
    'no-use-before-define': [ error, { functions: false, classes: true } ],
    'object-curly-spacing': [ error, always ],
    'array-bracket-spacing': [ error, always ],
    'quotes': [ error, single ],
    'semi': [ error, never ],
    'space-before-function-paren': off,
    'keyword-spacing': error,
    'eol-last': [ error, always ],
    'brace-style': [ error, '1tbs', { allowSingleLine: true } ],
    'curly': [ error, all ]
  }
}
