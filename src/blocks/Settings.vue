<template lang='pug'>
  Block(
    block-title='Settings'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      .COL(v-if='element')
        Prop(
          :element='element'
          v-for='(prop, i) in getAttrs'
          :key='i'
          :prop='prop'
        )
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Settings',

  components: {
    Block: () => import('@/templates/Block.vue'),
    Prop: () => import('@/components/Prop.vue'),
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

    getAttrs() {
      const result = []
      if(this.element) {
        const keys = Object.keys(this.element.attrs)
        keys.forEach(key => {
          result.push({
            name: key,
            value: this.element.attrs[key]
          })
        })

      }
      return result
    }
  },

  methods: {
  }
}
</script>

<style>

</style>