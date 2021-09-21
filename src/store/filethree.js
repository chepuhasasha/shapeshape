export default {
  namespaced: true,

  state: {
    head: null,
    file: null,
    three: {
      name: "project",
      type: "folder",
      child: [
        {
          name: "components",
          type: "folder",
          child: [
            {
              name: "Button.vue",
              type: "vuejs",
              code:
                "<template lang='pug'>\n  .test\n</template>\n\n<script>\nexport default {\n  name: 'Test'\n}\n</script>\n\n<style lang='scss'>\n.test {\n  display: flex;\n}\n</style>"
            }
          ]
        },
        {
          name: "App.vue",
          type: "vuejs",
          code: "sdcsdcsdc"
        },
        {
          name: "main.js",
          type: "js",
          code: "sdcdscsdc"
        }
      ]
    }
  },

  mutations: {
    SET_HEAD(state, value) {
      state.head = state.head === value ? null : value;
    },
    SET_THREE(state, value) {
      state.three = value;
    },
    SET_FILE(state, value) {
      state.file = value;
    }
  },

  actions: {
    setHead({ commit }, value) {
      commit("SET_HEAD", value);
    },
    setThree({ commit }, value) {
      commit("SET_THREE", value);
    },
    setFile({ commit }, value) {
      commit("SET_FILE", value);
    }
  }
};
