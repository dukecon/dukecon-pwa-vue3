import { shallowMount } from '@vue/test-utils';
import SideMenu from '@/components/SideMenu.vue'

const classToCheck = 'is-open';

describe('SideMenu', () => {
	it(`adds and removes '${classToCheck}' css class`, async () => {
		const wrapper = shallowMount(SideMenu);
		const menu = wrapper.find('.side-menu');

		expect(menu.classes(classToCheck)).toBe(false);

		await wrapper.find('.side-menu .toggle-menu-button').trigger('click')
		expect(menu.classes(classToCheck)).toBe(true);

		await wrapper.find('.side-menu .toggle-menu-button').trigger('click')
		expect(menu.classes(classToCheck)).toBe(false);
	});
});
