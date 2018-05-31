<template>
  <div>
    <div style="" class="editorM" @mousedown="ctrlD">
      <picElement ref="child"></picElement>
    </div>
    <h1>当前设计</h1>
  </div>
</template>

<script>
import picElement from '@/components/picElement';
export default {
  name: 'operate',
  data () {
    return {
      operateShow: false
    };
  },
  components: {
    picElement
  },
  methods: {
    ctrlD: function () {
      this.$store.state.operate.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .editorM{
    margin: 0 auto;
    width: 90%;
    height: 500px;
    border: 2px solid #000;
  }
</style>
