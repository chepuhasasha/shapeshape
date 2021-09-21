import Vue from 'vue'
import Vuex from 'vuex'

import fileThree from '@/store/filethree'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light'
  },
  mutations: {
    SET_THEME(state, value) {
      state.theme = value
    }
  },
  actions: {
    setTheme({ commit }, value) {
      commit('SET_THEME', value)
    }
  },
  modules: {
    fileThree
  }
})
