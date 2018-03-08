'use strict'

const { error, never, always, off, single } = require('./constants')

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
    browser: true
  },

  globals: {
    after: true,
    afterEach: true,
    artifacts: true,
    before: true,
    beforeEach: true,
    console: true,
    contract: true,
    describe: true,
    document: true,
    context: true,
    expect: true,
    fetch: true,
    it: true,
    jest: true,
    test: true,
    navigator: true,
    process: true,
    URL: true,
    window: true
  },

  rules: {
    'comma-dangle': [ 1, never ],
    'max-len': off,
    'no-console': off,
    'no-mixed-spaces-and-tabs': error,
    'no-tabs': error,
    'no-trailing-spaces': error,
    'no-undefined': off,
    'no-use-before-define': [ error, { functions: false, classes: true } ],
    'object-curly-spacing': [ error, always ],
    'array-bracket-spacing': [ error, always, { objectsInArrays: false } ],
    'quotes': [ error, single ],
    'semi': [ error, never ],
    'space-before-function-paren': 0,
    'keyword-spacing': error
  }
}
