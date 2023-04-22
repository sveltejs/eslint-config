'use strict';

const { off, all, always, error, never, warn } = require('./constants');

module.exports = {
	rules: {
		'arrow-spacing': 2,
		'brace-style': 2,
		camelcase: off,
		'comma-dangle': [error, never],
		curly: [error, 'multi-line'],
		'eol-last': error,
		'import/no-unresolved': off,
		'keyword-spacing': [2, { before: true, after: true }],
		'no-unused-vars': off,
		'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
		'no-cond-assign': 0,
		'no-class-assign': 2,
		'no-const-assign': 2,
		'no-import-assign': warn,
		'no-inner-declarations': 0,
		'no-this-before-super': 2,
		'no-var': 2,
		'no-unreachable': 2,
		'object-shorthand': [2, always],
		'one-var': off,
		'prefer-arrow-callback': 2,
		'prefer-const': [2, { destructuring: all }],
		quotes: ['error', 'single', { avoidEscape: true }],
		'quote-props': [2, 'as-needed'],
		'require-atomic-updates': off,
		semi: [2, always],
		'space-before-blocks': [2, always],
		'valid-typeof': 2,
		'@typescript-eslint/array-type': [error, { default: 'array-simple' }],
		'@typescript-eslint/ban-ts-comment': off,
		'@typescript-eslint/ban-types': off,
		'@typescript-eslint/camelcase': off,
		'@typescript-eslint/class-name-casing': off,
		'@typescript-eslint/explicit-function-return-type': off,
		'@typescript-eslint/explicit-member-accessibility': off,
		'@typescript-eslint/explicit-module-boundary-types': off,
		'@typescript-eslint/naming-convention': off,
		'@typescript-eslint/no-empty-function': off,
		'@typescript-eslint/no-explicit-any': off,
		'@typescript-eslint/no-inferrable-types': off,
		'@typescript-eslint/no-object-literal-type-assertion': off,
		'@typescript-eslint/no-unused-vars': ['error', { args: 'after-used', argsIgnorePattern: '^_' }],
		'@typescript-eslint/no-use-before-define': off,
		'@typescript-eslint/no-this-alias': off,
		'@typescript-eslint/prefer-interface': off,
		'@typescript-eslint/space-infix-ops': 'error'
	},
	globals: {
		globalThis: false
	},
	env: {
		es6: true,
		browser: true,
		node: true,
		mocha: true
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended'
	],
	parserOptions: {
		ecmaVersion: 9,
		sourceType: 'module'
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': off
			}
		},
		{

			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: {
					ts: '@typescript-eslint/parser',
					js: 'espree',
					typescript: '@typescript-eslint/parser'
				}
			}
		}
	]
};
