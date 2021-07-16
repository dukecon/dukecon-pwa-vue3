# dukecon-pwa-vue3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Notes
Styling? 
Bulma can take css vars, but requires overrides to prevent automatic color conversions
Alternatively, colors can be set at build time (ENV var?)
(look at https://github.com/wtho/bulma-css-vars)

I18n
vue-i18n is not vue-3-ready, but there is also vue-i18n-next, which is still in beta: https://github.com/intlify/vue-i18n-next

npm 7 and package.json -> npx jessevanassen/npm-update to generate an update command that will also update the package.json 