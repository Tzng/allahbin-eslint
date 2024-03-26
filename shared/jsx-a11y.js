module.exports = {
  extends: ['plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  rules: {
    // 禁用可访问的表情符号
    'jsx-a11y/accessible-emoji': 'off',

    // 警告缺少alt文本
    'jsx-a11y/alt-text': 'warn',

    // 锚点必须有内容
    'jsx-a11y/anchor-has-content': 'error',

    // 锚点必须有效
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],

    // aria-activedescendant必须有tabindex
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

    // aria属性检查
    'jsx-a11y/aria-props': 'error',

    // aria属性类型检查
    'jsx-a11y/aria-proptypes': 'error',

    // aria角色检查
    'jsx-a11y/aria-role': 'error',

    // 不支持的aria元素检查
    'jsx-a11y/aria-unsupported-elements': 'error',

    // 点击事件必须有键盘事件
    'jsx-a11y/click-events-have-key-events': 'error',

    // 控件必须有关联的标签
    'jsx-a11y/control-has-associated-label': 'off',

    // 标题必须有内容
    'jsx-a11y/heading-has-content': 'error',

    // href中不允许使用#
    'jsx-a11y/href-no-hash': 'off',

    // HTML必须有lang属性
    'jsx-a11y/html-has-lang': 'error',

    // iframe必须有title
    'jsx-a11y/iframe-has-title': 'error',

    // 图像的alt属性不能是冗余的
    'jsx-a11y/img-redundant-alt': 'error',

    // 交互元素必须支持焦点
    'jsx-a11y/interactive-supports-focus': 'warn',

    // 标签必须有关联的控件
    'jsx-a11y/label-has-associated-control': 'error',

    // 语言属性检查
    'jsx-a11y/lang': 'error',

    // 媒体元素必须有标题
    'jsx-a11y/media-has-caption': 'warn',

    // 鼠标事件必须有键盘事件
    'jsx-a11y/mouse-events-have-key-events': 'error',

    // 禁止使用访问键
    'jsx-a11y/no-access-key': 'error',

    // 禁止使用分散注意力的元素
    'jsx-a11y/no-distracting-elements': 'error',

    // 交互元素不应该具有非交互性角色
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',

    // 非交互元素不应该具有交互性角色
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',

    // 不允许非交互性tabindex
    'jsx-a11y/no-noninteractive-tabindex': 'off',

    // 禁止使用onchange
    'jsx-a11y/no-onchange': 'off',

    // 角色不应该是冗余的
    'jsx-a11y/no-redundant-roles': 'error',

    // 不允许静态元素交互
    'jsx-a11y/no-static-element-interactions': 'off',

    // 角色必须有必需的aria属性
    'jsx-a11y/role-has-required-aria-props': 'error',

    // 角色必须支持aria属性
    'jsx-a11y/role-supports-aria-props': 'error',

    // 限制scope属性
    'jsx-a11y/scope': 'error',

    // tabindex不应为正数
    'jsx-a11y/tabindex-no-positive': 'warn',
  },
};
