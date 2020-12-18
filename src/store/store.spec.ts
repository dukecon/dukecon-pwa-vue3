import { getters } from '@/store';
import { defaultTitle, defaultUrl } from '@/store/metaData';
import { MetaData } from '@t/utils';
import metaData from '@t/mocks/metadata.json';
import conferences from '@t/mocks/conferences.json';
import { MockApiStore } from '@t/mocks/store';
import type { Talk } from '@/types';

const imprint =  {
    de: 'imprint_german_link',
    en: 'imprint_english_link'
};

const termsOfUse = {
    de: 'tou_german_link',
    en: 'tou_english_link'
  };

const privacy = {
    de: 'privacy_german_link',
    en: 'privacy_english_link'
};

const bogus = {
	de: 'should_not_be_here',
	en: 'should_not_be_here',
};

describe('Store: getters', () => {
	it('gets all links', () => {
		const store = MockApiStore();
		store.commit('initialize', MetaData({imprint, termsOfUse, privacy, bogus}));
		expect(getters.footerLinks(store.state)).toEqual({imprint, termsOfUse, privacy});
	});
	it('gets only present links', () => {
		const store = MockApiStore();
		store.commit('initialize', MetaData({termsOfUse}));
		expect(getters.footerLinks(store.state)).toEqual({termsOfUse});
	});
	it('is empty if no links', () => {
		const store = MockApiStore();
		store.commit('initialize', MetaData());
		expect(getters.footerLinks(store.state)).toEqual({});
	});
});
// TODO: mutations (initialize sets defaults)
describe('Store: mutations', () => {
	it('initialize sets default values', () => {
		const store = MockApiStore();
		const meta = MetaData({imprint, termsOfUse, privacy, bogus});
		delete meta.name;
		meta.url = '';
		delete meta.homeUrl;

		store.commit('initialize', meta);
		expect(store.state.metaData.name).toBe(defaultTitle);
		expect(store.state.metaData.url).toBe(defaultUrl);
		expect(store.state.metaData.homeUrl).toBe(defaultUrl);
	});

	it('conference data overwrites metadata', () => {
		const store = MockApiStore();

		store.commit('initialize', metaData);

		expect(store.state.metaData.id).toBe('conference-id');
		expect(store.state.metaData.year).toBe('2019');

		expect(store.state.metaData.name).toBe('Conference Name');
		expect(store.state.metaData.url).toBe('original_url');
		expect(store.state.metaData.homeUrl).toBe('original_homeurl');

		store.commit('updateConferences', conferences);

		expect(store.state.metaData.id).toBe('conference-id');
		expect(store.state.metaData.year).toBe('2019');

		expect(store.state.metaData.name).toBe('Overwritten Name');
		expect(store.state.metaData.url).toBe('overwritten_url');
		expect(store.state.metaData.homeUrl).toBe('overwritten_homeurl');
	});

	it('sorts conferences by date and time', async () => {
		const store = MockApiStore();

		await store.dispatch('load');
		expect(store.state.events.length).toBe(6);

		const ids: string[] = store.state.events.map((event: Talk) => event.id);
		expect(ids).toEqual(['1', '6', '4', '2', '3', '5'])
	});
});
