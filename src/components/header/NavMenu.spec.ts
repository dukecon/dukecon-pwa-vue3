import { MountOptions } from '@t/utils';
import { mount } from '@vue/test-utils';
import NavMenu from '@/components/header/NavMenu.vue';
import router from '@/router'

const classToCheck = 'is-active';

describe('NavMenu', () => {
	it('opens and closes on click', async () => {
		router.push('/');
		await router.isReady(); // prevent code warning about history being null

		const wrapper = mount(NavMenu, MountOptions({}, router));
		const button = wrapper.find('button');
		const menu = wrapper.find('.navbar-menu');

		expect(menu.classes(classToCheck)).toBe(false);
		expect(button.classes(classToCheck)).toBe(false);
		await button.trigger('click');
		expect(menu.classes(classToCheck)).toBe(true);
		expect(button.classes(classToCheck)).toBe(true);
		await button.trigger('click');
		expect(menu.classes(classToCheck)).toBe(false);
		expect(button.classes(classToCheck)).toBe(false);
	});
	it('closes on ESC', async () => {
		router.push('/');
		await router.isReady(); // prevent code warning about history being null

		const wrapper = mount(NavMenu, MountOptions({}, router));
		const button = wrapper.find('button');
		const menu = wrapper.find('.navbar-menu');

		await button.trigger('click');
		expect(menu.classes(classToCheck)).toBe(true);
		expect(button.classes(classToCheck)).toBe(true);
		await wrapper.find('.navbar').trigger('keyup.esc');
		expect(menu.classes(classToCheck)).toBe(false);
		expect(button.classes(classToCheck)).toBe(false);
	});
})
