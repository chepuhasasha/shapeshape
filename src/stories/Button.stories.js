import Button from "../components/Button.vue";

export default {
  component: Button,
  title: "UI/Button",
};

export const Default = () => ({
  components: { Button },
  template: '<Button text="Button"/>'
});

