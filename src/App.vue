<template lang='pug'>
  #app
    router-view
</template>
<script>
import {mapActions} from 'vuex'
import styles from '@/styles'

export default {
  name: 'App',
  methods: {
    ...mapActions({
      setTheme: 'setTheme'
    })
  },
  mounted() {
    // console.log(localStorage.getItem('theme'))
    // if(localStorage.getItem('theme')) {
    //   this.setTheme(localStorage.getItem('theme'))
    //   styles.setTheme(localStorage.getItem('theme'))
    //   return
    // }
    const query = window.matchMedia('(prefers-color-scheme: light)')
    this.setTheme(query.matches ? 'light' : 'dark')
    styles.setTheme(query.matches ? 'light' : 'dark')
  }
}
</script>

<style lang="scss">
.ROW {
  display: flex;
  gap: 10px;
}

#app {
  height: 100%;
  width: 100%;
}
*::-webkit-scrollbar {
  background-color: var(--background_100);
  height: 5px;
  width: 5px;
}
*::-webkit-scrollbar-thumb {
  background-color: var(--background_0);
}
body {
  font-family: Inter;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  padding: 0px;
  margin: 0;
  background: var(--background_0);
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
}
</style>
