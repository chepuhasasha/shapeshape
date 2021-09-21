<template lang='pug'>
  .decorator
    .decorator_theme-btns
      Button(
        :text='name'
        @click='setTheme(name)'
        :active='true'
        v-for='(name, i) in getThemes'
        :key='i')
    .decorator_body
      slot(name='story')
</template>

<script>
import styles from '../src/styles'
export default {
  name: 'Decorator',

  data: () => {
    return {
      theme: 'dark'
    }
  },

  components: {
    Button: () => import('../src/components/Button.vue')
  },

  computed: {

    getThemes() {
      return styles.getTheme()
    }
  },

  methods: {
    setTheme(name) {
      this.theme = name
      styles.setTheme(name)
    }
  },

  created() {
    styles.setTheme('dark')
  }

}
</script>

<style lang='scss'>
.decorator {
  display: flex;
  flex-direction: column;
  padding: 20px;
  &_theme-btns{
    display: flex;
    gap: 10px;
    background: var(--background_200);
    padding: 10px;
  }
  &_body {
    padding: 10px;
    background: var(--background_100);
  }
}
</style>