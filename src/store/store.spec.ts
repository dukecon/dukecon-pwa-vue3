import { Store, getters } from '@/store';
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

describe('getters', () => {
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
