<template lang='pug'>
  .editor
    transition(name='slide-fade' v-on:after-enter="afterEnter")
      Themes(grid-area='1/1/2/2' v-if='chain.indexOf(1) != -1')
    transition(name='slide-fade' v-on:after-enter="afterEnter")
      Project(grid-area='2/1/8/2' v-if='chain.indexOf(2) != -1')
    transition(name='slide-fade' v-on:after-enter="afterEnter")
      Viewport(grid-area='1/2/8/8' v-if='chain.indexOf(3) != -1')
    transition(name='slide-fade' v-on:after-enter="afterEnter")
      Settings(grid-area='1/8/11/9' v-if='chain.indexOf(4) != -1')
    transition(name='slide-fade' v-on:after-enter="afterEnter")
      Timeline(grid-area='8/1/11/8' v-if='chain.indexOf(5) != -1')
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data: () => {
    return {
      chain: [1]
    }
  },
  components: {
    Themes: () => import('@/blocks/Themes.vue'),
    Timeline: () => import('@/blocks/Timeline.vue'),
    Viewport: () => import('@/blocks/Viewport.vue'),
    Settings: () => import('@/blocks/Settings.vue'),
    Project: () => import('@/blocks/Project.vue'),
  },
  computed: {
    ...mapState({
      file: state => state.fileThree.file
    })
  },

  methods: {
    afterEnter() {
      const num = this.chain[this.chain.length - 1]
      this.chain.push(num + 1)
    }
  }
}
</script>

<style lang='scss'>
.editor {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-gap: 1px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
