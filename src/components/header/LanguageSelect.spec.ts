import { store } from '../../../tests/mocks/store';
import { mount } from '@vue/test-utils';
import { I18n } from '@/translations';
import LanguageSelect from './LanguageSelect.vue';


test('LanguageSelect', async () => {
  const wrapper = mount(LanguageSelect, {
    global: {
      plugins: [ store, I18n() ]
    }
  })

  expect(wrapper.html()).toContain('English');
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('deutsch');
})
