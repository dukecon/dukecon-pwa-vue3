import { MockStore } from '@t/mocks/store';
import { I18n } from '@/translations';
import type { MetaData, TranslationLinks } from '@/types';

export function MountOptions ({ store = MockStore(), locale = 'de'} = {}, ...additional:Array<any> ) {
	return {
		stubs: ['router-link', 'router-view', 'external-link'],
		global: {
			plugins: [ store, I18n(locale), ...additional]
		}
	};
}

export function MetaData( links?: Record<string, TranslationLinks>): MetaData {
	return {
		id: 'test',
		name: 'Test',
		year: '2020',
		url: 'http://www.conference.com',
		startDate: '2020-04-01',
		endDate: '2020-04-03',
		...links
	};
}


