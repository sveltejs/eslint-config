## Beyonk eslint configuration

This is essentially a reactless fork of [the eslint-config I made](https://github.com/appliedblockchain/eslint-config/) whilst at Applied Blockchain.

It is based on `standard` with a few minor tweaks for neatness.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## Usage:

Installation:

```bash
npm i -D eslint @beyonk/eslint-config
```

### Node Modules

In your project's package.json, use the shorthand syntax

```json
  "eslintConfig": {
    "extends": "@beyonk"
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
