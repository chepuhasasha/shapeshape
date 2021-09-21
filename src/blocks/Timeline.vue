<template lang='pug'>
  Block(:grid-area='gridArea')
    template(v-slot:header)
      span Timeline
      .ROW
        Button(icon='eye')
        Button(icon='eye')
        Button(icon='eye')
    template(v-slot:body)
      .timeline
        .timeline_titlebar(:style='{width: titlebar.width + "px"}')
        .timeline_line
</template>

<script>
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
  },

  methods: {
  }
}
</script>

<style lang='scss'>
.timeline {
  width: 100%;
  height: 30px;
  background: var(--background_200);
  padding: 2px;
  &_titlebar {
    background: var(--background_100);
    height: 100%;
  }
  &_line {

  }
}
</style>