import { mount } from '@vue/test-utils';

import ZText from '@/components/ZText/ZText.vue';


test('Contains a DIV by default', () => {
  const wrapper = mount(ZText, {
    slots: {
      default: '.'
    }
  });
  // Assert the rendered text of the component
  expect(wrapper.html()).toContain('div');
})
