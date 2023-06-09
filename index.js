'use strict';

module.exports = {
	rules: {
		'@typescript-eslint/array-type': [ 'error', { default: 'array-simple' } ],
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/camelcase': 'off',
		'@typescript-eslint/class-name-casing': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-object-literal-type-assertion': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { args: 'after-used', argsIgnorePattern: '^_' }],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-this-alias': 'off',
		'@typescript-eslint/prefer-interface': 'off',
		'no-constant-condition': ['error', { checkLoops: false }],
		'no-duplicate-imports': 'error',
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-inner-declarations': 'off',
		'no-sparse-arrays': 'off',
		'no-restricted-properties': [
			'error',
			{ 'object': 'test', 'property': 'only', 'message': 'Do not check in test.only tests.' }
		],
		'no-var': 'error',
		'object-shorthand': [ 'error', 'always' ],
		'prefer-arrow-callback': 'error',
		'prefer-const': [ 'error', { destructuring: 'all' } ],
		'quotes': ['error', 'single', { avoidEscape: true }],
		'quote-props': [ 'error', 'as-needed' ],
		'svelte/no-inner-declarations': 'off',
		'unicorn/prefer-node-protocol': 'error'
	},
	globals: {
		globalThis: false
	},
	env: {
		es6: true,
		browser: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parserOptions: {
		ecmaVersion: 13, // es2022
		sourceType: 'module'
	},
	plugins: ['unicorn']
};
