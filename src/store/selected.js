export default {
  namespaced: true,

  state: {
    element: {
      name: 'Line #1',
      type: 'path',
      attrs: { d: 'M10 10 H 90 V 90 H 10 L 10 10', stroke: 'white', fill: 'black', "stroke-width": 2 },
      keyframes: [
        {time: 0, attr: 'fill', value: 'red'},
        {time: 1000, attr: 'fill', value: 'yellow'}
      ]
    }
  },

  mutations: {
    SET_ELEMENT(state, value) {
      state.element = value;
    }
  },

  actions: {
    setElement({ commit }, value) {
      commit("SET_ELEMENT", value);
    }
  }
};
