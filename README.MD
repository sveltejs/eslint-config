## ESLint configuration

WIP

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## Contributing

Want to add an eslint rule? Open a PR and use gh-polls for voting: https://app.gh-polls.com/

## Usage

Installation:

```bash
npm i -D eslint svelte-eslint-config
```

### Node Modules

In your project's package.json, use the shorthand syntax

```json
  "eslintConfig": {
    "extends": "@sveltejs"
  }
```

## Linting

This project self-lints:

```bash
npm i
npm run lint
```

## Releasing

To release a new version, check out the code on your local machine, then:

```bash
npm version minor
git push && git push --tags
```

Where `minor` is a sensible default for rule changes which will impact existing projects.
