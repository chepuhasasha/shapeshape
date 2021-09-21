import Decorator from "./Decorator.vue";

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [(story) => ({
  components: { Decorator, story },
  template: '<Decorator><template v-slot:story><story /></Decorator>'
})];
