module.exports = {
  extends: ['./shared/non-rules.js', './shared/prettier.js'],
  rules: {
    // 禁止使用 any 类型
    '@typescript-eslint/no-explicit-any': 'warn',

    // 禁止在声明时使用显式类型
    '@typescript-eslint/no-inferrable-types': 'error',

    // 强制类型注释的间距样式
    '@typescript-eslint/type-annotation-spacing': 'error',

    // 禁止导入未解析的模块
    'import/no-unresolved': 0,

    // 禁止使用 require 语句
    '@typescript-eslint/no-var-requires': 0,

    // 禁止使用 ++ 运算符
    'no-plusplus': 0,

    // 强制在函数和类的公共类方法上明确返回类型
    '@typescript-eslint/explicit-module-boundary-types': 0,

    // 要求函数返回类型
    '@typescript-eslint/explicit-function-return-type': 0,

    // 要求 require() 出现在顶层模块作用域
    'global-require': 0,

    // 禁止特定类型的注释
    '@typescript-eslint/ban-ts-comment': 0,

    // 禁止未使用的变量
    '@typescript-eslint/no-unused-vars': 1,

    // 禁止导入不相关的依赖
    'import/no-extraneous-dependencies': 0,

    // 禁止未使用过的表达式
    '@typescript-eslint/no-unused-expressions': 0,

    // 强制统一命名规范
    '@typescript-eslint/naming-convention': 0,

    // 禁止特定类型
    '@typescript-eslint/ban-types': 0,

    // 禁止空接口
    '@typescript-eslint/no-empty-interface': 0,

    // 防止 React 未被正确导入
    'react/jsx-uses-react': 0,

    // 防止在 JSX 中使用 React 被错误地导入
    'react/react-in-jsx-scope': 0,

    // 禁止使用非空断言后缀操作符
    '@typescript-eslint/no-non-null-assertion': 0,

    // 禁止在变量定义之前使用它们
    '@typescript-eslint/no-use-before-define': 0,

    // 禁止对函数的参数进行重新赋值
    'no-param-reassign': 0,

    // 禁用 debugger
    'no-debugger': 1,

    // 在数组或迭代器中验证 JSX 元素具有 key 属性
    'react/jsx-key': 2,

    // 要求使用 === 和 !==
    eqeqeq: 2,

    // 禁止在常规字符串中使用模板字面量占位符语法
    'no-template-curly-in-string': 2,

    // 禁止 this 关键字在类或类对象之外出现
    '@typescript-eslint/no-invalid-this': 0,
  },
};
