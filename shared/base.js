// This configuration overrides rules from `eslint-config-airbnb-base`
module.exports = {
  extends: [
    // "airbnb-base" // Uses rules from `eslint-config-airbnb-base`
  ],
  rules: {
    // 箭头函数体需要大括号
    // https://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: true,
      },
    ],

    // 是否需要使用尾随逗号
    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': 'off',

    // 是否需要命名函数表达式
    // https://eslint.org/docs/rules/func-names
    'func-names': 'off',

    // 强制最大行长度
    // https://eslint.org/docs/rules/max-len
    'max-len': 'off',

    // 禁止使用alert
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'error',

    // 禁止在循环中使用await
    // https://eslint.org/docs/rules/no-await-in-loop
    'no-await-in-loop': 'off',

    // 禁用console
    // https://eslint.org/docs/rules/no-console
    'no-console': 'off',

    // 禁止重新分配函数参数
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': 0,

    // 禁止使用特定语法
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],

    // 禁止在return语句中进行赋值
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'except-parens'],

    // 禁止变量声明遮蔽外部作用域中声明的变量
    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': [
      'error',
      {
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
        hoist: 'all',
      },
    ],
    // 禁止使用下划线作为标识符
    'no-underscore-dangle': 'off',

    // 禁止未使用的表达式
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
      },
    ],

    // 未使用的变量警告
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: 'res|next|^err|^_',
        ignoreRestSiblings: true,
        caughtErrors: 'all',
      },
    ],

    // 更喜欢使用const
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],

    // 引号风格
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],

    // 进制转换
    radix: 'off',

    // 函数括号前的空格
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // 允许return await
    'no-return-await': 0,

    // 允许在循环中定义函数
    'no-loop-func': 0,

    // 类方法是否使用this
    'class-methods-use-this': 0,

    // 禁止使用特定的类型
    '@typescript-eslint/ban-types': 0,
  },
};
