使用方式：

## .prettierrc.js 中使用

```javascript
const prettier = require('@allahbin/eslint-config/prettier');

module.exports = prettier;
```

## .eslintrc中使用

```json
{
  "extends": "@allahbin/eslint-config/typescript",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## Breaking Changes

- Uses Eslint v7 from v2.x.x
- Dropped usage `eslint-config-airbnb` in favour of `@allahbin/eslint-config`

## Installation

```
# npm
npx install-peerdeps @allahbin/eslint-config --dev

# yarn
npx install-peerdeps @allahbin/eslint-config --dev --yarn
```

This will install the required `peerDependencies` for eslint

## Usage

Add extends of the preferred base config to your `.eslintrc.json`:

```json
{
  "extends": "@allahbin/eslint-config/typescript",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}

```

## Other configs

This config also exposes `react`, `node`, and `typescript` configs that I use often.

### TypeScript

To use the ts configuration, install the `TypeScript` compiler:

```
# npm
npm install typescript --save-dev

# yarn
yarn add --dev typescript
```

`.eslintrc.json:`

```json
{
  "extends": [
    "@allahbin/eslint-config/typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    // your overrides
  },
}
```

### Node.js

It is to be used in combination with the base config (recommended)

`.eslintrc.json:`

```json
{
  "extends": [
    "@allahbin/eslint-config", // or "@allahbin/eslint-config/typescript",
    "@allahbin/eslint-config/node"
  ],
  "parserOptions": {
    // Uncomment both if you are using typescript with node
    // "project": "./tsconfig.json",
    // "sourceType": "module" // https://github.com/mysticatea/eslint-plugin-node#-configs
  },
  "rules": {
    // Uncomment if you are using typescript with node(ES Modules)
    // "node/no-unsupported-features/es-syntax": ["error", {
    //   "ignores": ["modules"]
    // }],

    // your other overrides
  },
}
```

### React

It is to be used in combination with the base config (recommended)

`.eslintrc.json:`

```json
{
  "extends": [
    "@allahbin/eslint-config", // or "@allahbin/eslint-config/typescript",
    "@allahbin/eslint-config/react"
  ],
  "parserOptions": {
    // Uncomment if you are using typescript configuration
    // "project": "./tsconfig.json"
  },
  "rules": {
    // your overrides
  }
}
```
