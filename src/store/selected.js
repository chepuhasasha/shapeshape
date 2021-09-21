export default {
  namespaced: true,

  state: {
    element: null,
    composition: null
  },

  mutations: {
    SET_ELEMENT(state, value) {
      state.element = value;
    },
    SET_COMPOSITION(state, value) {
      state.composition = value;
    }
  },

  actions: {
    setElement({ commit }, value) {
      commit("SET_ELEMENT", value);
    },
    setComposition({ commit }, value) {
      commit("SET_COMPOSITION", value);
    }
  }
};
