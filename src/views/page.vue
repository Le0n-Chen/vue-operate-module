<template>
  <div ref="pageContent">
    12313123
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue';
export default {
  name: 'Page',
  data () {
    return {
      page: {
        type: 'div',
        index: 0,
        height: 600,
        width: 500,
        clientX: 100,
        clientY: 100,
        child: [{
          type: 'div',
          text: 'module1',
          index: 1,
          height: 600,
          width: 500,
          clientX: 100,
          clientY: 100,
          child: [{
            type: 'div',
            text: 'module3',
            index: 2,
            height: 600,
            width: 500,
            clientX: 300,
            clientY: 100,
            child: []
          }]
        },
        {
          type: 'div',
          text: 'module2',
          index: 1,
          height: 600,
          width: 500,
          clientX: 200,
          clientY: 100,
          child: [{
            type: 'div',
            text: 'module4',
            index: 2,
            height: 600,
            width: 500,
            clientX: 400,
            clientY: 100,
            child:[]
          }]
        }]
      }
    };
  },
  mounted: function () {
    this.compile(this.page);
  },
  methods: {
    compile (dataChild) {
      console.log(dataChild.index);// 外层
      let _this = this;
      for (let i = 0; i < dataChild.child.length; i++) {
        let id = dataChild.child[i].text;

        // 组件 SRART
        let Component = Vue.extend({
          // 利用this运行时绑定。tem中直接绑定，而methods中运行时绑定
          template: `<${dataChild.type} style="position:absolute; left: ${dataChild.child[i].clientX}px;top: ${dataChild.child[i].clientY}px;
          width: ${dataChild.child[i].width}px;height: ${dataChild.child[i].height}px" ref="pageContent${id}" > ${dataChild.child[i].text} </${dataChild.type}>`,
          data () {
            return {
              page: {
                type: dataChild.child[i].type,
                index: dataChild.child[i].index,
                height: dataChild.child[i].height,
                width: dataChild.child[i].width,
                clientX: dataChild.child[i].clientX,
                clientY: dataChild.child[i].clientY,
                child: dataChild.child[i].child
              }
            };
          },
          methods: {
            compile: this.compile
          },
          mounted: function () {
            if(dataChild.child[i].index<3){
              this.compile(dataChild.child[i]);
            }
            console.log(this.page.index);
          }
        });

        // 组件 END
        let markedComponent = new Component().$mount();
        if (dataChild.index == 0) {
          _this.$refs['pageContent'].appendChild(markedComponent.$el); // 当前组件的上下文环境
        } else {
          console.log(markedComponent.$el);
          this.$refs['pageContent'+dataChild.text].appendChild(markedComponent.$el);        }
      }
    },
    showInfo: function () {
    }
  }
};

</script>

<style>

</style>
