<template lang='pug'>
  Block(:grid-area='gridArea')
    template(v-slot:header)
      span Viewport
      span {{ Math.round(scale * 100) + '%'}}
    template(v-slot:body)
      .viewport
        .wrapper(:style='getWrap')
          svg(version="1.1"
            :style='{transform: `scale(${scale})`}'
            v-if='composition'
            :width="composition.viewport.width"
            :height="composition.viewport.height"
            xmlns="http://www.w3.org/2000/svg")
            component(
              v-for='(el, i) in composition.elements'
              :key='i'
              :is='el.type'
              v-bind='el.attrs'
              @click='selectElement(el)'
            )
            component.selected(
              v-if='element'
              :is='element.type'
              v-bind='element.attrs'
            )
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Viewport',

  components: {
    Block: () => import('@/templates/Block.vue'),
  },

  data: () => {
    return {
      scale: 1
    }
  },

  props: {
    gridArea: {
      type: String,
      default: null
    },
  },

  computed: {
    ...mapState({
      composition: state => state.selected.composition,
      element: state => state.selected.element
    }),

    getWrap() {
      return this.composition ? {
        width: `${this.composition.viewport.width * this.scale}px`,
        height: `${this.composition.viewport.height * this.scale}px`
      } : {}
    }
  },

  methods: {
    ...mapActions({
      selectElement: 'selected/setElement'
    }),

    resize(e) {
      this.scale += e.wheelDelta / 1000
      if(this.scale <= 0.1) {
        this.scale = 0.1
      }
    }
  },

  mounted() {
    window.addEventListener('wheel', this.resize)
  },

  destroyed() {
    window.removeEventListener('wheel', this.resize)
  }
}
</script>

<style lang='scss'>
.viewport {
  background: var(--background_0);
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  min-width: 100%;
  min-height: 100%;
  overflow: auto;
  padding: 20px;
  .wrapper {
    margin: auto auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    transition: all ease-out 0.3s;
    border: 1px solid var(--background_200);
  }
}
.selected {
  stroke: var(--primary_0);
  opacity: 0.5;
  stroke-width: 2px;
}
</style>