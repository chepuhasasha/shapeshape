<template lang='pug'>
  Block(:grid-area='gridArea')
    template(v-slot:header)
      span Timeline
      .ROW
        Button(icon='eye')
        Button(icon='eye')
        Button(icon='eye')
    template(v-slot:body)
      .timeline(
        v-for='(el, i) in getElements'
        :class='{[$style.active]: el === element}'
      )
        .timeline_titlebar(
          :style='{width: titlebar.width + "px"}'
          @click='selectElement(el)'
        ) 
          span.timeline_titlebar_type {{ el.type }}
          span.timeline_titlebar_name {{ el.name }}
        .timeline_line
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Timeline',

  components: {
    Block: () => import('@/templates/Block.vue'),
    Button: () => import('@/components/Button.vue'),
  },

  data: () => {
    return {
      titlebar: {
        width: 200
      }
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
      composition: state =>  state.selected.composition,
      element: state =>  state.selected.element
    }),

    getElements() {
      return this.composition ? this.composition.elements : []
    }
  },

  methods: {
    ...mapActions({
      selectElement: 'selected/setElement'
    })
  }
}
</script>

<style lang='scss'>
.timeline {
  width: 100%;
  height: 30px;
  background: var(--background_0);
  padding: 2px;
  &_titlebar {
    background: var(--background_100);
    height: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 0px 2px;
    cursor: pointer;
    &:hover {
      background: var(--background_200);
    }
    &_type {
      opacity: 0.7;
      font-size: 10px;
      padding: 5px;
      background: var(--background_200);
      text-transform: uppercase;
    }
  }
  &_line {
    
    }
}
</style>
<style lang='scss' module>
.active {
  background: var(--background_200);
}
</style>