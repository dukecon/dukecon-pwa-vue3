module.exports = {
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = "DukeCon Conference Planner 3.0";
				return args;
			})
	},
	css: {
		sourceMap: true,
	}
}
