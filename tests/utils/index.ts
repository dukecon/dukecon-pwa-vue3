import { mockStore } from '@t/mocks/store';
import { I18n } from '@/translations';

export function MountOptions ({ store = mockStore, locale = 'de'} = {}, ...additional:Array<any> ) {
	return {
		stubs: ['router-link', 'router-view', 'external-link'],
		global: {
			plugins: [ store, I18n(locale), ...additional]
		}
	};
}
