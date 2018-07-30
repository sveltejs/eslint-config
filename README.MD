<p align="center">
![beyonk logo colour](https://user-images.githubusercontent.com/218949/43399071-c35bfd86-9401-11e8-9e11-ffee6888ce8a.png)
</p>

## ESLint configuration

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![CircleCI](https://circleci.com/gh/beyonk-adventures/eslint-config.svg?style=svg)](https://circleci.com/gh/beyonk-adventures/eslint-config)

This is essentially a reactless fork of [the eslint-config I made](https://github.com/appliedblockchain/eslint-config/) whilst at Applied Blockchain.

It is based on `standard` with a few minor tweaks for neatness.

## Contributing

Want to add an eslint rule? Open a PR and use gh-polls for voting: https://app.gh-polls.com/

## Usage

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
