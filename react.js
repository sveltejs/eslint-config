'use strict'

const { error, any } = require('./constants')

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
    'react/jsx-indent': [ 1, 2 ],
    'react/jsx-indent-props': [ 1, 2 ],
    'react/forbid-prop-types': [ 2, { 'forbid': [ any ] } ],
    'react/jsx-boolean-value': [ 0 ],
    'react/sort-comp': [ 2, {
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
    }],
    'react/jsx-pascal-case': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-unused-prop-types': 1,
    'react/no-multi-comp': [ 1, { ignoreStateless: true } ],
    'react/prefer-stateless-function': 2
  }
}
