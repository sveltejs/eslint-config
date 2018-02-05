'use strict'

const { error, never, off, single } = require('./constants')

module.exports = {

  extends: 'eslint:recommended',

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
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
    'no-console': off,
    'comma-dangle': [ 1, never ],
    'max-len': off,
    'no-mixed-spaces-and-tabs': error,
    'no-tabs': error,
    'no-use-before-define': [ error, { functions: false, classes: true } ],
    'no-undefined': off,
    'object-curly-spacing': [ 0, never ],
    'semi': [ error, never ],
    'space-before-function-paren': 0,
    'quotes': [ error, single ]
  }
}
