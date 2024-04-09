## ESLint configuration

Common eslint configuration for the Svelte organisation

## Contributing

Want to add an eslint rule? Open a PR and use gh-polls for voting: https://app.gh-polls.com/

## Usage

After installing `@sveltejs/eslint-config` with your package manager of choice,
import it and put it in the configuration array in `eslint.config.js`.

```js
import svelteConfig from '@sveltejs/eslint-config';

export default [
	...svelteConfig,
	{
		// your overrides
	}
];
```

## Linting

This project self-lints:

```bash
pnpm install
pnpm lint
```

## Changesets

All PRs with user-facing changes must include a changeset, which can be generated by running `pnpm changeset`.
