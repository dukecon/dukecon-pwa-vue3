import { MountOptions } from '@t/utils';
import { shallowMount } from '@vue/test-utils';
import LoginArea from '@/components/header/LoginArea.vue';
import { MockApiStore } from '@t/mocks/store';
import type { MetaData } from '@/types';

const metaDataAuth: MetaData = {
	id: 'test',
	name: 'Test',
	year: '2020',
	url: '/',
	startDate: '',
	endDate: '',
	authEnabled: true,
}

const metaDataNoauth: MetaData = {
	id: 'test',
	name: 'Test',
	year: '2020',
	url: '/',
	startDate: '',
	endDate: '',
	authEnabled: false,
}

const metaDataAuthMissing: MetaData = {
	id: 'test',
	name: 'Test',
	year: '2020',
	url: '/',
	startDate: '',
	endDate: '',
}

const selector = '.login-area div';

describe('LanguageSelect', () => {
	it('shows login area if authEnabled=true', async () => {
		const store = MockApiStore()
		store.commit('initialize', metaDataAuth);
		const wrapper = shallowMount(LoginArea, MountOptions({store}));

		expect(wrapper.find(selector).exists()).toBe(true);
	});
	it('hides login area if authEnabled=false', async () => {
		const store = MockApiStore()
		store.commit('initialize', metaDataNoauth);
		const wrapper = shallowMount(LoginArea, MountOptions({store}));

		expect(wrapper.find(selector).exists()).toBe(false);
	});
	it('hides login area if authEnable not present', async () => {
		const store = MockApiStore()
		store.commit('initialize', metaDataAuthMissing);
		const wrapper = shallowMount(LoginArea, MountOptions({store}));

		expect(wrapper.find(selector).exists()).toBe(false);
	});
});
