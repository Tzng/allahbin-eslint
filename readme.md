## 安装

npm
```
npm i @allahbin/eslint --dev
```

yarn
```
yarn add @allahbin/eslint --dev
```

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

## 其他配置

此配置还公开了我经常使用的“react”、“node”和“typescript”配置。

### TypeScript

要使用ts配置，请安装“TypeScript”编译器：

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
    "@allahbin/eslint/typescript"
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

它将与基本配置结合使用（推荐）

`.eslintrc.json:`

```json
{
  "extends": [
    "@allahbin/eslint", // or "@allahbin/eslint/typescript",
    "@allahbin/eslint/node"
  ],
  "parserOptions": {

  },
  "rules": {
    // your other overrides
  },
}
```

### React

它将与基本配置结合使用（推荐）

`.eslintrc.json:`

```json
{
  "extends": [
    "@allahbin/eslint", // or "@allahbin/eslint-config/typescript",
    "@allahbin/eslint/react"
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
