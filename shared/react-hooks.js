module.exports = {
	"plugins": [
		"react-hooks"
	],
	"rules": {
		// 强制挂钩规则
		"react-hooks/rules-of-hooks": "error",
		// 验证类似useEffect之类的钩子的依赖项列表
		"react-hooks/exhaustive-deps": "error",
	}
}
