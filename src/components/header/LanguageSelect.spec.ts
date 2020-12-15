import { MountOptions } from '@t/utils';
import { shallowMount } from '@vue/test-utils';
import LanguageSelect from '@/components/header/LanguageSelect.vue';

describe('LanguageSelect', () => {
	it('switches language on, click', async () => {
		const wrapper = shallowMount(LanguageSelect, MountOptions());

		expect(wrapper.html()).toContain('English');
		await wrapper.find('button').trigger('click')
		expect(wrapper.html()).toContain('deutsch');
	});
});
