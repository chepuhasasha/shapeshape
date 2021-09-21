<template lang='pug'>
  .three-item
    .three-item_header(:class='{"three-item_active": item === file}')
      Button(
        :icon='getIcon'
        @click='open(item)'
      )
      input.three-item_name(@click='open(item)' v-model='item.name')
      Button(
        v-if='item.type === "folder"'
        :icon='!isHead ? "home" : "times-circle"'
        @click='setHead(item)'
      )
      Button(
        v-if='item.type != "folder"'
        :icon='file === item ? "times" : "pen"'
        @click='open(item)'
      )
    .three-item_child(v-if='item.child && isOpen')
      ThreeItem(v-for='(folder,i) in item.child' :key='i' :item='folder')
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ThreeItem',
  components: {
    Button: () => import('@/components/Button.vue')
  },
  props: {
    item: {
      type: Object,
      default: null
    }
  },

  data: () => {
    return {
      isOpen: false
    }
  },
  
  computed: {
    ...mapState({
      head: state => state.fileThree.head,
      file: state => state.fileThree.file,
    }),

    isHead() {
      return this.item === this.head
    },

    getIcon() {
      if(this.item.type === 'folder') {
        if(this.isOpen) {
          return ["fas","folder-open"] 
        }
        return ["fas","folder"] 
      } 
        return ["fab", this.item.type]
      
    }
  },

  methods: {
    ...mapActions({
      setHead: 'fileThree/setHead',
      setFile: 'fileThree/setFile'
    }),

    open(item) {
      if(item.type === 'folder') {
        this.isOpen = !this.isOpen
      } else if(this.file === item) {
          this.setFile(null)
        } else {
          this.setFile(item)
        }
    }
  }
}
</script>
<style lang="scss">
.three-item {
  color: var(--text_primary);
  width: 100%;
  &_active {
    background: var(--hover_0);
  }
  &_header {
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap:5px;
    padding: 2px;
    &:hover {
      background: var(--hover_100);
    }
  }
  &_name {
    background: none;
    color: var(--text-primary_0);
    cursor: pointer;
    font-weight: 100;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 13px;
    width: 100%;
  }
  &_child {
    padding-left: 15px;
  }
}
</style>