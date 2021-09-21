<template lang='pug'>
  Block(
    block-title='Viewer'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      .viewport {{ element }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Viewer',

  components: {
    Block: () => import('@/templates/Block.vue'),
  },

  props: {
    gridArea: {
      type: String,
      default: null
    },
  },

  computed: {
    ...mapState({
      element: state => state.selected.element
    }),
  },

  methods: {
  }
}
</script>

<style lang='scss'>
.viewport {
  background: var(--background_0);
  width: 100%;
  height: 100%;
}
</style>