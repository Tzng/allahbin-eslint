module.exports = {
	"env": {
		"browser": true
	},
	"extends": [
		"plugin:react/recommended", // extend config which uses `eslint-plugin-react`
		'./shared/prettier.js',
		"./shared/react-hooks.js"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true // allows parsing of jsx
		}
	},
	"plugins": [
		"react"
	],
	// react rules documentation https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
	"rules": {

		// Enforce consistent usage of destructuring assignment of props, state, and context
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
		"react/destructuring-assignment": ["error", "always"],

		// Prevent missing displayName in a React component definition
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
		"react/display-name": "warn",

		// Forbid certain propTypes
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
		"react/forbid-prop-types": "off",

		// Restrict file extensions that may contain JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
		"react/jsx-filename-extension": [
			"warn",
			{
				"extensions": [
					".js",
					".jsx",
					".tsx"
				]
			}
		],

		// Prevent usage of Array index in keys
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
		"react/no-array-index-key": "error",

		// Prevent usage of dangerous JSX props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		"react/no-danger": "warn",

		// Report when a DOM element is using both children and dangerouslySetInnerHTML
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
		"react/no-danger-with-children": "warn",

		// 防止使用过时的方法
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
		"react/no-deprecated": "error",

		// Prevent direct mutation of this.state
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
		"react/no-direct-mutation-state": "error",

		// Prevent multiple component definition per file
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
		"react/no-multi-comp": "off",

		// Prevent usage of the return value of React.render
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
		"react/no-render-return-value": "error",

		// Report "this" being used in stateless components
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
		"react/no-this-in-sfc": "error",

		// Prevent common typos
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
		"react/no-typos": "error",

		// Detect unescaped HTML entities, which might represent malformed tags
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
		"react/no-unescaped-entities": "error",

		// Prevent usage of unsafe lifecycle methods
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
		"react/no-unsafe": "error",

		// Enforce stateless components to be written as a pure function
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		"react/prefer-stateless-function": "off",

		// Prevent missing props validation in a React component definition
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		"react/prop-types": "off",

		// Prevent missing React when using JSX
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
		"react/react-in-jsx-scope": "off",

		// Enforce a defaultProps definition for every prop that is not a required prop
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
		"react/require-default-props": "off",

		// Enforce ES5 or ES6 class for returning value in render function
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
		"react/require-render-return": "error",

		// Prevent extra closing tags for components without children (fixable)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		"react/self-closing-comp": [
			"error",
			{
				"component": true,
				"html": true
			}
		],
		// ES6类组件中的状态初始化应该在构造函数中
		"react/state-in-constructor": "off",

		"no-console": "off",
		"no-extend-native": "off",
		"react/jsx-props-no-spreading": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		"react/no-set-state": "off",
		"react-hooks/exhaustive-deps": "off",
		"react/jsx-indent-props": ["error", 2],
		"react/jsx-indent": ["error", 2],
		"react/jsx-no-undef": 1, //在JSX中禁止未声明的变量
		// button里面要带type
		"react/button-has-type": 0,
		// 禁用++
		"no-plusplus": 0,
		"no-unreachable": 2, //不能有无法执行的代码
		// 后面的分号之类的
		// "semi": 0,
		// 强制使用一致的换行风格
		"linebreak-style": "off",
		"react/sort-comp": 2, //强制组件方法顺序
		// 不允许空格和 tab 混合缩进
		"no-mixed-spaces-and-tabs": "error",
		// 允许使用字符串拼接
		"prefer-template": "off",
		// 可以对参数进行重新赋值
		"no-param-reassign": 0,
		"no-underscore-dangle": 0,
		"indent": ["error", 2, {"SwitchCase": 1}],
		// 对象结构需要进行换行
		"object-curly-newline": 0,
		// 字符串最后的逗号
		"comma-dangle": 0,
		// 类后面的换行
		"padded-blocks": 0,
		"no-trailing-spaces": 0,
		"quote-props": 0,
		"no-script-url": 0,
		// 代码的长度限制
		"max-len": 0,
		// 星号后面的空格
		"generator-star-spacing": 0,
		// 不允许存在未使的变量
		'@typescript-eslint/no-unused-vars': 2,
		// 驼峰
		"camelcase": 2
	},
	"settings": {
		// Override `eslint-plugin-import` rule
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx", ".ts", ".tsx", ".json"]
			}
		},
		"react": {
			"version": "detect" // tells `eslint-plugin-react` to auto detect react version
		}
	}
}
