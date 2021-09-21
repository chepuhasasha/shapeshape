<template lang="pug">
  .code-editor(:style='getStyle')
    .code-editor_title {{ file.name }}


    codemirror(v-model='file.code' :options='cmOptions')
    //- textarea.code-editor_code(v-model='file.code')
</template>

<script>

import { codemirror } from "vue-codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/base16-dark.css";
import "codemirror/lib/codemirror.css";

import { mapState } from "vuex";

export default {
  name: "CodeEditor",

  components: {
    codemirror,
    ThreeItem: () => import("@/components/ThreeItem.vue"),
    Block: () => import("@/templates/Block.vue")
  },

  props: {
    gridArea: {
      type: String,
      default: null
    }
  },

  data: () => {
    return {
      cmOptions: {
        tabSize: 4,
        mode: "text/javascript",
        theme: "base16-dark",
        lineNumbers: true,
        line: true
        // more CodeMirror options...
      }
    };
  },

  computed: {
    ...mapState({
      file: state => state.fileThree.file
    }),

    getStyle() {
      return {
        gridArea: this.gridArea ? this.gridArea : "1/1/4/4"
      };
    }
  }
};
</script>

<style lang="scss">
.code-editor {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 0px;
  background: var(--background_100);
  border-radius: 0px;
  padding: 20px;
  &_title {
    font-size: 20px;
    color: var(--text_primary);
    font-family: Ubuntu Mono;
    opacity: 0.5;
  }
  &_code {
    font-family: Ubuntu Mono;
    background: none;
    border-radius: 10px;
    font-size: 12px;
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    color: var(--text_primary);
  }
}
</style>
