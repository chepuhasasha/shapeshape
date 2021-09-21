<template lang='pug'>
  Block(
    block-title='Viewport'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      .viewport
        svg(version="1.1"
          v-if='composition'
          :width="composition.viewport.width"
          :height="composition.viewport.height"
          :fill='composition.viewport.fill'
          xmlns="http://www.w3.org/2000/svg")
          component(
            v-for='(el, i) in composition.elements'
            :key='i'
            :is='el.type'
            v-bind='el.attrs'
            @click='selectElement(el)'
          )
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Viewport',

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
      composition: state => state.selected.composition
    }),
  },

  methods: {
    ...mapActions({
      selectElement: 'selected/setElement'
    })
  }
}
</script>

<style lang='scss'>
.viewport {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background_0);
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  min-width: 100%;
  min-height: 100%;
  overflow: auto;
  padding: 20px;
  svg {
    border: 1px solid var(--background_200);
  }
}
</style>