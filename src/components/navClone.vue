<template>
  <div class="nav_ul">
    <li class="divBox" draggable="true" v-for="element in navArray" :key="element.id" :ref="element.name" @dragstart='drag($event)'>{{element.name}}</li>
  </div>
</template>

<script>
/* eslint-disable */
let dom = null;
export default {
  name: 'navClone',
  data () {
    return {
      navArray: [
        {id: 1, name: 'div'},
        {id: 2, name: 'list'}
      ]
    };
  },
  methods: {
    drag:function(event){
       dom = event.currentTarget;
       console.log(dom);
       this.$emit('child-say',dom);
    }
  },
  components: {
  },
  mounted: function(){
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
.nav_ul li {
    border: 2px solid #696969;
    width: 10rem;
    height: 5rem;
    line-height: 5rem;
}
.divBox{
  border: 2px solid #696969;
    width: 10rem;
    height: 5rem;
    line-height: 5rem;
}
</style>
