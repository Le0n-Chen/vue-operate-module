<template>
  <div>
    <div class="la_module_clone">
      <ul>
        <navClone  @child-say="dealDom"></navClone><!--将操作的dom传递给主页面-->
      </ul>
    </div>
    <div class="main_test" @drop='drop($event)' @dragover='allowDrop($event)'></div>
    <div>
      <div class="data_see"></div>
    </div>
    <div></div>
  </div>
</template>

<script>
/* eslint-disable */ 
import navClone from '@/components/navClone';
export default {
  data () {
    return {
      myArray: [
        {id: 1, name: 'one'},
        {id: 2, name: 'two'},
        {id: 3, name: 'three'},
        {id: 4, name: 'four'},
        {id: 5, name: 'five'}
      ],
      tags: [
        {id: 6, name: 'six'},
        {id: 7, name: 'seven'},
        {id: 8, name: 'eight'},
        {id: 9, name: 'nine'},
        {id: 10, name: 'ten'}
      ]
    };
  },
  methods: {
    dealDom: function (dom) {
      this.doming = dom;
      console.log(this.doming);
    },
    drop: function (event) {
      event.preventDefault();
      var item = this.doming.cloneNode();
      event.target.appendChild(item);// 添加元素
    },
    allowDrop: function (event) {
      event.preventDefault();
    }
  },
  components: {
    navClone
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container{
  border: 3px solid red;
  height: 100px;
  width: 100px;
}
.main_test{
  border:2px solid #000;
  width: 90%;
  height: 450px;
  margin: 0 auto;
}
.la_module_clone{
  border: 2px solid #000;
  position: fixed;
  left:5rem;
  top:70%;
}
</style>

