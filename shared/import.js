module.exports = {
  env: {
    es6: true,
  },
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    // 禁用导入文件扩展名
    'import/extensions': 'off',

    // 强制导入语句放在文件顶部
    'import/first': 'error',

    // 禁止使用绝对路径导入
    'import/no-absolute-path': 'error',

    // 禁止匿名默认导出
    'import/no-anonymous-default-export': 0,

    // 禁止重复导入模块
    'import/no-duplicates': 'error',

    // 禁用内部模块导入
    'import/no-internal-modules': 'off',

    // 禁止可变导出
    'import/no-mutable-exports': 'error',

    // 禁用未使用的模块
    'import/no-unused-modules': 'off',

    // 禁用受限制的路径导入
    'import/no-restricted-paths': 'off',

    // 禁止未赋值的导入
    'import/no-unassigned-import': 'off',

    // 禁用webpack加载器语法
    'import/no-webpack-loader-syntax': 'error',

    // 不强制使用默认导出
    'import/prefer-default-export': 'off',

    // 不允许将模块命名为默认导出
    'import/no-named-as-default': 1,

    // 不允许将模块成员命名为默认导出
    'import/no-named-as-default-member': 1,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json'],
      },
    },
    'import/ignore': ['node_modules', '.json$', '.(scss|css)$'],
  },
};
