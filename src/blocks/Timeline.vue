<template lang='pug'>
  Block(
    block-title='Timeline'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      .ROW
</template>

<script>
export default {
  name: 'Timeline',

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
  },

  methods: {
  }
}
</script>

<style>

</style>