module.exports = {
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = "DukeCon Conference Planner 3.0";
				return args;
			});
		// TODO: make this work to get rid of console warnings about external-link
		// config.module
		// 	.rule('vue')
		// 	.use('vue-loader')
		// 	.loader('vue-loader')
		// 	.tap(options => {
		// 		options.compilerOptions = {
		// 			...(options.compilerOptions || {}),
		// 			isCustomElement: tag => ['external-link'].includes(tag)
		// 	};
		// 	return options;
		// });
	},
	css: {
		sourceMap: true,
	}
}
