import { mount } from '@vue/test-utils';

import ZText from '@/components/ZText.vue';

describe('<z-text>', () => {
  it('should have <div> as default', () => {
    const wrapper = mount(ZText, {
      slots: {
        default: '.'
      }
    });
  
    expect(wrapper.html()).toContain('div');
  })
});
