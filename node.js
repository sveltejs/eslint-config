'use strict'

const { warn, error, never, always, off, single, all } = require('./constants')

module.exports = {

  extends: 'eslint:recommended',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
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
    'no-multi-spaces': error,
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
    'brace-style': [ error, '1tbs', { allowSingleLine: false } ],
    'curly': [ error, all ],
    'block-spacing': [ error,  always ],
    'indent': [ error, 2, { SwitchCase: 1 } ],
    'spaced-comment': [ error, always ],
    'array-callback-return': warn,
    'eqeqeq': [ error, always, { null: 'ignore' } ],
    'yoda': error,
    'no-throw-literal': error,
    'no-self-compare': error,
    'no-return-assign': error,
    'no-loop-func': error,
    'valid-jsdoc': [ warn, { requireParamDescription: false, requireReturnDescription: false } ],
    'for-direction': error,
    'no-buffer-constructor': error,
    'no-new-require': error,
    'no-path-concat': error,
    'comma-spacing': error,
    'comma-style': error,
    'computed-property-spacing': [ error, never ],
    'consistent-this': [ error, 'self' ],
    'func-call-spacing': [ error, never ],
    'key-spacing': error,
    'new-cap': error,
    'no-lonely-if': error,
    'no-mixed-operators': error,
    'no-unneeded-ternary': [ error, { defaultAssignment: false } ],
    'space-before-blocks': error,
    'space-in-parens': [ error, never ],
    'space-unary-ops': error,
    'prefer-const': warn,
    'prefer-rest-params': error,
    'prefer-spread': error,
    'no-constant-condition': [ error, { checkLoops: false } ]
  }
}
