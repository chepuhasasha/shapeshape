<template lang='pug'>
  Block(
    block-title='FileThree'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      ThreeItem(:item='getThree')
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FileThree',

  components: {
    ThreeItem: () => import('@/components/ThreeItem.vue'),
    Block: () => import('@/templates/Block.vue')
  },

  props: {
    gridArea: {
      type: String,
      default: null
    },
  },

  computed: {
    ...mapState({
      head: state => state.fileThree.head,
      three: state => state.fileThree.three
    }),

    getThree() {
      return this.head ? this.head : this.three
    }
  }
}
</script>

<style lang='scss'>
</style>