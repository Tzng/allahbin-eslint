module.exports = {
	extends: [
		"./shared/non-rules.js",
		'./shared/prettier.js'
	],
	"rules": {
		"@typescript-eslint/no-explicit-any": "warn",
		"@typescript-eslint/no-inferrable-types": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"import/no-unresolved": 0,
		"@typescript-eslint/no-var-requires": 0,
		"no-plusplus": 0,
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
		"global-require": 0,
		"@typescript-eslint/ban-ts-comment": 0,
		"@typescript-eslint/no-unused-vars": 1,
		"import/no-extraneous-dependencies": 0,
		"@typescript-eslint/no-unused-expressions": 0,
		"@typescript-eslint/naming-convention": 0,
		"@typescript-eslint/ban-types": 0,
		"@typescript-eslint/no-empty-interface": 0,
		"react/jsx-uses-react": 0,
		"react/react-in-jsx-scope": 0,
		"@typescript-eslint/no-non-null-assertion": 0,
		"@typescript-eslint/no-use-before-define": 0,
		"no-param-reassign": 0,
		"no-debugger": 1,
		'react/jsx-key': 2,
		eqeqeq: 2,
		'no-template-curly-in-string': 2,
		'@typescript-eslint/no-invalid-this': 0,
		// 要求使用模板字面量而非字符串连接
		'prefer-template': 2,
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 1,
				maxBOF: 1,
			},
		],
	}
}
