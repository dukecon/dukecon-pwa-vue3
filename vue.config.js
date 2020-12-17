module.exports = {
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = "DukeCon Conference Planner 3.0";
				return args;
			});

		config.module
			.rule('vue')
			.use('vue-loader')
			.tap(options => {
				options.compilerOptions = {
					...options.compilerOptions,
					isCustomElement: tag => ['external-link'].includes(tag)
				};
				return options;
			});
	},
	css: {
		sourceMap: true,
	}
}
