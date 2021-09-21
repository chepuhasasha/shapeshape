<template lang='pug'>
  .block(:style='getStyle')
    .block_header  
      slot(name='header') {{ blockTitle }}
    .block_body 
      slot(name='body')
</template>

<script>
export default {
  name: 'Block',
  props: {
    blockTitle: {
      type: String,
      default: null
    },

    width: {
      type: String,
      default: '100%'
    },

    height: {
      type: String,
      default: '100%'
    },

    gridArea: {
      type: String,
      default: null
    }
  },

  computed: {
    getStyle() {
      return {
        gridArea: this.gridArea ? this.gridArea : '1/1/4/4',
        width: this.width,
        height: this.height
      }
    }
  }
}
</script>

<style lang='scss'>
.block {
  background: var(--background_100);
  border-radius: 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: var(--text_primary);
  &_header {
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 13px;
    color: var(--text_primary);
    margin-bottom: 10px;
  }

  &_body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>
