<template lang='pug'>
  Block(
    :block-title='config.name'
    :grid-area='gridArea'
  )
    template(v-slot:body)
      .COL
        .composition(
          v-for='(comp, i) in config.compositions'
          :key='i'
          @click='selectComposition(comp)'
          :class='{[$style.active]: comp === composition}'
        ) {{ comp.name }}
</template>

<script>
import { mapActions, mapState} from 'vuex'

export default {
  name: 'Project',

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
      config: state => state.config,
      composition: state => state.selected.composition
    })
  },

  methods: {
    ...mapActions({
      selectComposition: 'selected/setComposition'
    })
  }
}
</script>

<style lang='scss'>
.composition {
  background: var(--background_0);
  font-size: 12px;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: var(--background_200);
  }
}
</style>
<style lang='scss' module>
.active {
  background: var(--background_200);
  font-size: 12px;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  &:hover {
    background: var(--background_100);
  }
}
</style>