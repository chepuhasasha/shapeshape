<template lang='pug'>
  Block(
    block-title='Themes'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      .ROW
        Button(
          :text='name'
          @click='setTheme(name)'
          :active='theme === name'
          v-for='(name, i) in getThemes'
          :key='i')
</template>

<script>
import { mapState, mapActions } from 'vuex'
import styles from '@/styles'

export default {
  name: 'Connector',

  components: {
    Block: () => import('@/templates/Block.vue'),
    Button: () => import('@/components/Button.vue')
  },

  props: {
    gridArea: {
      type: String,
      default: null
    },
  },

  computed: {
    ...mapState({
      theme: state => state.theme,
    }),

    getThemes() {
      return styles.getTheme()
    }
  },

  methods: {
    ...mapActions({
      setTheme: 'setTheme'
    })
  },

  watch: {
    theme(val) {
      // localStorage.removeItem('theme')
      // localStorage.setItem('theme', val)
      styles.setTheme(val)
    }
  },

  mounted() {
    styles.setTheme(this.theme)
  }
}
</script>

<style>

</style>