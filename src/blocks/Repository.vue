<template lang='pug'>
  Block(
    block-title='Repository'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      span test
</template>

<script>
export default {
  name: 'Card',
  props: {
    gridArea: {
      type: String,
      default: null
    }
  },
  components: {
    Block: () => import('@/templates/Block.vue')
  }
}
</script>

<style lang='scss'>
</style>
