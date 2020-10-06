import { mount, shallowMount} from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import ZText from '../ZText/ZText.vue';


test('Contains a DIV by default', () => {
  // mount() returns a wrapped Vue component we can interact with

  const wrapper = mount(ZText, {
    slots: {
      default: '.'
    }
  });
  // Assert the rendered text of the component
  expect(wrapper.html()).toContain('div');
})