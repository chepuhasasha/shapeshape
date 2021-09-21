<template lang='pug'>
  .COL.prop
    span {{ prop.name }}
    .ROW
      input(
        v-if='map[prop.name].type === "number"'
        type='number'
        v-model='element.attrs[prop.name]'
      )
      input(
        v-if='map[prop.name].type === "color"'
        type='color'
        v-model='element.attrs[prop.name]'
      )
      input(
        v-if='map[prop.name].type === "color"'
        v-model='element.attrs[prop.name]'
      )
</template>

<script>
export default {
  name: 'Prop',
  data: () => {
    return {
      map: {
        fill: {
          type: 'color'
        },
        stroke: {
          type: 'color'
        },
        "stroke-width": {
          type: 'number'
        }
      }
    }
  },

  props: {
    element: {
      type: Object,
      require: true,
    },
    prop: {
      type: Object,
      require: true,
    }
  }
}
</script>

<style lang=scss>
.prop {
  background: var(--background_0);
  padding: 10px;
  border-radius: 6px;
}
</style>