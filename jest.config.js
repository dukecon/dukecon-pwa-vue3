module.exports = {
	preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
	testMatch: ["**/*.spec.js", "**/*.spec.ts"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"^@t/(.*)$": "<rootDir>/tests/$1"
	},
	transform: {
		"^.+\\.vue$": "@vue/vue3-jest"
	},
	globals: {
		"@vue/vue3-jest": {
			templateCompiler: {
				compilerOptions: {
					isCustomElement: tag => ['external-link'].includes(tag)
				}
			}
		}
	}
};
