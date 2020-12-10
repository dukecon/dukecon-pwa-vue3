module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: ["**/*.spec.js", "**/*.spec.ts"], 
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
}
