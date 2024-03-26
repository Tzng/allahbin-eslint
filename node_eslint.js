module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    // enforce either module.exports or exports
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
    'node/exports-style': ['error', 'module.exports'],

    // enforce the style of file extensions in import declarations
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
    // Disabled temporarily due to https://github.com/abhijithvijayan/eslint-config/issues/3#issuecomment-653654869
    // "node/file-extension-in-import": ["error", "always"],

    // enforce either Buffer or require("buffer").Buffer
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
    'node/prefer-global/buffer': ['error', 'always'],

    // enforce either console or require("console")
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
    'node/prefer-global/console': ['error', 'always'],

    // enforce either process or require("process")
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
    'node/prefer-global/process': ['error', 'always'],

    // enforce either URLSearchParams or require("url").URLSearchParams
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
    'node/prefer-global/url-search-params': ['error', 'always'],

    // enforce either URL or require("url").URL
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
    'node/prefer-global/url': ['error', 'always'],

    // enforce require("dns").promises
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
    'node/prefer-promises/dns': 'error',

    // enforce require("fs").promises
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
    'node/prefer-promises/fs': 'error',
    'no-console': 'off',
    'no-extend-native': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    'react/no-set-state': 'off',
    'react/state-in-constructor': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-indent-props': ['error', 4],
    'react/jsx-indent': ['error', 4],
    'react/jsx-no-undef': 1, //在JSX中禁止未声明的变量
    // button里面要带type
    'react/button-has-type': 0,
    // 禁用++
    'no-plusplus': 0,
    'no-unreachable': 2, //不能有无法执行的代码
    // 后面的分号之类的
    // "semi": 0,
    // 强制使用一致的换行风格
    'linebreak-style': 'off',
    'react/sort-comp': 2, //强制组件方法顺序
    // 不允许空格和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'error',
    // 允许使用字符串拼接
    'prefer-template': 'off',
    // 可以对参数进行重新赋值
    'no-param-reassign': 0,
    // 定义过的变量必须使用
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
      },
    ],
    'no-underscore-dangle': 0,
    indent: ['error', 4, { SwitchCase: 1 }],
    // 对象结构需要进行换行
    'object-curly-newline': 0,
    // 字符串最后的逗号
    'comma-dangle': 0,
    // 类后面的换行
    'padded-blocks': 0,
    'no-trailing-spaces': 0,
    'quote-props': 0,
    'no-script-url': 0,
    // 代码的长度限制
    'max-len': 0,
    // 星号后面的空格
    'generator-star-spacing': 0,
    // 驼峰
    camelcase: 0,
  },
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node', '.ts'],
    },
  },
};
