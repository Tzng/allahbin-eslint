module.exports = {
  // 是否在对象属性添加空格，这里选择是 { foo: bar }
  bracketSpacing: true,
  // 将 > 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行（不适用于自闭元素）。
  jsxBracketSameLine: false,
  // 指定代码换行的行长度。单行代码宽度超过指定的最大宽度
  printWidth: 100,
  // 在语句末尾打印分号。
  semi: true,
  // 使用单引号而不是双引号。
  singleQuote: true,
  // 指定每个缩进级别的空格数。
  tabWidth: 2,
  // 多行时尽可能打印尾随逗号。在ES5中有效的尾随逗号（对象，数组等）
  trailingComma: 'es5',
  // 使用制表符 (tab) 缩进行而不是空格 (space)。
  useTabs: false,
  // 是否换行 如果超过打印宽度，请换行。
  proseWrap: 'always',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
};
