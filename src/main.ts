import './styles/app.scss';
import { createApp } from 'vue'
import App from './App.vue'
import { ExternalLink } from '@/components/webcomponent/ExternalLink.ts'
import './registerServiceWorker'
import router from './router'
import { Store } from './store'
import { createI18n } from 'vue-i18n'
import { en, de } from './translations';

customElements.define('external-link', ExternalLink);

const store = Store();
store.dispatch('load');

createApp(App)
	.use(store)
	.use(router)
	.use(I18n())
	.mount('#app')

function I18n() {
	return createI18n({
		legacy: false,
		globalInjection: true,
		locale: 'de',
		messages: {	de,	en }
	});
}
