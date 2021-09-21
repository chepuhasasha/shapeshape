/*eslint-disable */
import { mount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('Button', () => {
  const wrapper = mount(Button);
  it('clicked', () => {
    wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  });
});