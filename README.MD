## Applied Blockchain eslint configuration

## Usage:

Installation:

```bash
npm i -D eslint
npm i -D @appliedblockchain/eslint-config
```

### Node Modules

In your project's package.json, use the shorthand syntax

```json
  "eslintConfig": {
    "extends": "@appliedblockchain"
  }
```

### React Projects

In your project's package.json, point to the react config

```json
  "eslintConfig": {
    "extends": "@appliedblockchain/eslint-config/react"
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
