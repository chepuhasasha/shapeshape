export default {
  namespaced: true,

  state: {
    config: {
      name: 'Project',
      compositions: [
        {
          name: 'Composition #1',
          duration: 1000,
          viewport: { width: 500, height: 500 },
          elements: [
            {
              name: 'Line #1',
              type: 'path',
              attrs: { d: 'M10 10 H 90 V 90 H 10 L 10 10', stroke: 'white', fill: 'black' },
              keyframes: [
                {time: 0, attr: 'fill', value: 'red'},
                {time: 1000, attr: 'fill', value: 'yellow'}
              ]
            }
          ]
        }
      ]
    }
  },

  mutations: {
    SET_CONFIG(state, value) {
      state.config = value;
    },
  },

  actions: {
    setConfig({ commit }, value) {
      commit("SET_CONFIG", value);
    },
  }
};
