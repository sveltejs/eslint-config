'use strict'

const { warn, off, error, any } = require('./constants')

module.exports = {

  extends: [
    '@appliedblockchain/eslint-config',
    'plugin:react/recommended'
  ],

  parser: 'babel-eslint',

  plugins: [
    'react'
  ],

  rules: {
    'jsx-quotes': [ error, 'prefer-double' ],
    'react/jsx-indent': [ warn, 2 ],
    'react/jsx-indent-props': [ warn, 2 ],
    'react/forbid-prop-types': [ error, { 'forbid': [ any ] } ],
    'react/jsx-boolean-value': [ off ],
    'react/sort-comp': [ error, {
      'order': [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ],
      'groups': {
        'lifecycle': [
          'displayName',
          'propTypes',
          'props',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'state',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    } ],
    'react/jsx-pascal-case': error,
    'react/no-did-mount-set-state': error,
    'react/no-did-update-set-state': error,
    'react/no-unused-prop-types': warn,
    'react/no-multi-comp': [ warn, { ignoreStateless: true } ],
    'react/prefer-stateless-function': error
  }
}
