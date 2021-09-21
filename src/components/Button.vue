<template lang="pug">
  .button(
    :class='getClass'
    :style='getStyle'
    @click='onClick'
  ) {{ text }}
    font-awesome-icon(v-if='icon' :icon='icon')
</template>

<script>
  /**
   * Button component.
   * @displayName Button
   */
export default {
  name: "Button",
  props: {
    /**
     * button text
     * @values String
     */
    text: {
      type: String,
      default: null
    },
    /**
     * button icon
     * @values ['fontawesome lib', 'fontawesome iconlib']
     */
    icon: {
      type: [Array,String],
      default: null
    },
    /**
     * disable button
     * @values true, false
     */
    disable: {
      type: Boolean,
      default: false
    },

    /**
     * active button
     * @values true, false
     */
    active: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getClass () {
      return {
        [this.$style.active]: this.active, 
        [this.$style.disable]: this.disable,
        [this.$style.icon]: !this.text
      }
    },

    getStyle() {
      const result = {}
      if(!this.text && this.icon) {
        // result.padding = '0'
      }
      return result
    },
  },

  methods: {
    onClick() {
      /**
     * Click event.
     *
     * @event click
     */
      this.$emit("click")
    }
  }
};
</script>

<style lang="scss">
.button {
  display: flex;
  gap: 8px;
  transition: all ease 0.1s;
  cursor: pointer;
  padding: 5px 8px;
  background: var(--background_0);
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  width: max-content;
  color: var(--text_primary);
  &:hover {
    color: white;
    background: var(--primary_100);
  }
}
</style>

<style lang="scss" module>
.active {
  background: var(--primary_0);
  color: white;
}

.disable {
  cursor: not-allowed;
  opacity: 0.5;
  background: var(--background_0);
  &:hover {
    background: var(--background_0);
  }
}

.icon {
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  height: 24px;
  min-height: 24px;
  max-height: 24px;
  background: var(--background_100);
}
</style>

<docs lang="md">
##### Default
```jsx
    <Button text='button'/>
```
##### Active
```jsx
    <Button text='button' :active='true'/>
```
##### Disable
```jsx
    <Button text='button' :disable='true'/>
```
</docs>
