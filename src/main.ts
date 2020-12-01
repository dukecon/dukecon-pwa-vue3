import './styles/app.scss';
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { store } from './store'
import { createI18n } from 'vue-i18n'
import { en, de } from './translations';

createApp(App)
	.use(store)
	.use(router)
	.use(I18n())
	.mount('#app')

function I18n() {
	return createI18n({
		legacy: false,
		locale: 'de',
		messages: {	de,	en }
	});
}
