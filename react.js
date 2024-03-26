module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended', // extend config which uses `eslint-plugin-react`
    './shared/prettier.js',
    './shared/react-hooks.js',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // allows parsing of jsx
    },
  },
  plugins: ['react'],
  // react rules documentation https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
  rules: {
    // 强制一致使用解构赋值props，state和context
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['error', 'always'],

    // 防止在React组件定义中缺少displayName
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': 'warn',

    // 禁止某些propTypes
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': 'off',

    // 限制可能包含JSX的文件扩展名
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],

    // 防止在键中使用数组索引
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
    'react/no-array-index-key': 'error',

    // 防止使用危险的JSX属性
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-danger': 'warn',

    // 报告DOM元素同时使用children和dangerouslySetInnerHTML
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'warn',

    // 防止使用过时的方法
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': 'error',

    // 防止直接修改this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // 防止每个文件中多个组件定义
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-multi-comp': 'off',

    // 防止在React.render中使用返回值
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'error',

    // 报告在无状态组件中使用"this"
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',

    // 防止常见的拼写错误
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
    'react/no-typos': 'error',

    // 检测未转义的HTML实体，可能表示格式不正确的标签
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'error',

    // 防止使用不安全的生命周期方法
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': 'error',

    // 强制无状态组件以纯函数形式编写
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off',

    // 防止在React组件定义中缺少props验证
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',

    // 在使用JSX时防止缺少React
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'off',

    // 为非必需的prop强制定义defaultProps
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',

    // 强制在render函数中返回值使用ES5或ES6类
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/require-render-return': 'error',

    // 防止没有子元素的组件额外关闭标签（可修复）
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    // ES6类组件中的状态初始化应该在构造函数中
    'react/state-in-constructor': 'off',

    // 禁用控制台打印
    'no-console': 'off',

    // 禁止扩展原生对象
    'no-extend-native': 'off',

    // 禁止在JSX属性中扩展props
    'react/jsx-props-no-spreading': 'off',

    // 禁止在TypeScript中要求显式函数返回类型
    '@typescript-eslint/explicit-function-return-type': 'off',

    // 禁止在TypeScript接口名称前缀
    '@typescript-eslint/interface-name-prefix': 'off',

    // 禁止使用this.setState
    'react/no-set-state': 'off',

    // 禁用React钩子依赖性检查
    'react-hooks/exhaustive-deps': 'off',

    // 强制缩进props
    'react/jsx-indent-props': ['error', 2],

    // 强制缩进
    'react/jsx-indent': ['error', 2],

    // 在JSX中禁止未声明的变量
    'react/jsx-no-undef': 1,

    // 按钮必须包含type属性
    'react/button-has-type': 0,

    // 禁用++
    'no-plusplus': 0,

    // 不能有无法执行的代码
    'no-unreachable': 2,

    // 强制组件方法排序
    'react/sort-comp': 2,

    // 不允许空格和tab混合缩进
    'no-mixed-spaces-and-tabs': 'error',

    // 允许使用字符串拼接
    'prefer-template': 'off',

    // 允许对参数进行重新赋值
    'no-param-reassign': 0,

    // 禁用标识符中的下划线
    'no-underscore-dangle': 0,

    // 强制缩进样式
    indent: ['error', 2, { SwitchCase: 1 }],

    // 对象结构需要换行
    'object-curly-newline': 0,

    // 禁用对象字面量结尾的逗号
    'comma-dangle': 0,

    // 禁用填充块
    'padded-blocks': 0,

    // 禁用尾随空格
    'no-trailing-spaces': 0,

    // 禁用引号属性
    'quote-props': 0,

    // 禁用JavaScript URL
    'no-script-url': 0,

    // 禁用代码长度限制
    'max-len': 0,

    // 禁用生成器星号间距
    'generator-star-spacing': 0,

    // 禁用未使用的变量
    '@typescript-eslint/no-unused-vars': 2,

    // 强制使用驼峰命名
    camelcase: 2,
  },
  settings: {
    // Override `eslint-plugin-import` rule
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    react: {
      version: 'detect', // tells `eslint-plugin-react` to auto detect react version
    },
  },
};
