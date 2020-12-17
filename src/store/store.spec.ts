import { Store, getters } from '@/store';
import { defaultTitle, defaultUrl } from '@/store/metaData';
import { MetaData } from '@t/utils';

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
		const store = Store();
		store.commit('initialize', MetaData({imprint, termsOfUse, privacy, bogus}));
		expect(getters.footerLinks(store.state)).toEqual({imprint, termsOfUse, privacy});
	});
	it('gets only present links', () => {
		const store = Store();
		store.commit('initialize', MetaData({termsOfUse}));
		expect(getters.footerLinks(store.state)).toEqual({termsOfUse});
	});
	it('is empty if no links', () => {
		const store = Store();
		store.commit('initialize', MetaData());
		expect(getters.footerLinks(store.state)).toEqual({});
	});
});
// TODO: mutations (initialize sets defaults)
describe('Store: mutations', () => {
	it('initialize sets default values', () => {
		const store = Store();
		const metaData = MetaData({imprint, termsOfUse, privacy, bogus});
		delete metaData.name;
		metaData.url = '';
		delete metaData.homeUrl;

		store.commit('initialize', metaData);
		expect(store.state.metaData.name).toBe(defaultTitle);
		expect(store.state.metaData.url).toBe(defaultUrl);
		expect(store.state.metaData.homeUrl).toBe(defaultUrl);
	});
});
