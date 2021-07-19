import '@/styles/app.scss';
import { createApp } from 'vue'
import App from '@/App.vue'
import { ExternalLink } from '@/components/webcomponent/ExternalLink'
import '@/registerServiceWorker'
import { router } from '@/setup'
import { Store, store } from '@/store';
import { I18n } from '@/translations';

customElements.define('external-link', ExternalLink);

const store: store = Store();
store.dispatch('load');

createApp(App)
	.use(store)
	.use(router)
	.use(I18n())
	.mount('#app')
