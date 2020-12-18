import { MountOptions } from '@t/utils';
import { mount } from '@vue/test-utils';
import FooterBar from '@/components/FooterBar.vue';
import { MockApiStore } from '@t/mocks/store';
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



describe('LanguageSelect', () => {
   // test probably makes little sense, better to test the getter directly

	it('shows links and text for de', async () => {
		const store = MockApiStore()
		store.commit('initialize', MetaData({imprint, termsOfUse, privacy, bogus}));
		const wrapper = mount(FooterBar, MountOptions({store, locale: 'de'}));

		expect(wrapper.findAll('external-link').length).toBe(4); // 3 variable links plus dukecon link
		expect(wrapper.html()).toContain('Impressum');
		expect(wrapper.html()).toContain('imprint_german_link');
		expect(wrapper.html()).not.toContain('imprint_english_link');
		expect(wrapper.html()).toContain('Nutzungsbedingungen');
		expect(wrapper.html()).toContain('tou_german_link');
		expect(wrapper.html()).toContain('Datenschutz');
		expect(wrapper.html()).toContain('privacy_german_link');
	});
	it('shows links and text for en', async () => {
		const store = MockApiStore()
		store.commit('initialize', MetaData({imprint}));
		const wrapper = mount(FooterBar, MountOptions({store, locale: 'en'}));

		expect(wrapper.findAll('external-link').length).toBe(2);
		expect(wrapper.html()).toContain('Legal mentions');
		expect(wrapper.html()).toContain('imprint_english_link');
		expect(wrapper.html()).not.toContain('imprint_german_link');
	});
});
