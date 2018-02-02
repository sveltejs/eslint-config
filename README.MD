## Applied Blockchain eslint configuration

## Usage:

Installation:

```bash
  npm install --save-dev @appliedblockchain/eslint-config
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