<template>
  <div>
    <table border="1" style="margin: 0 auto;">
      <draggable v-model="newArray" :options = "{disabled: disabled, chosenClass: 'choose'}" class="sort_col_table">
        <div class="sort_col_main" v-for="(item,index) in newArray" :key="item.id">
            <h4 class="sort_col_th">{{index}}</h4>
            <draggable v-model="newArray[index]" :options = "{disabled: disabled, chosenClass: 'choose'}">
               <div class="sort_col_td" v-for="element in item" :key="element.id" style="">{{element.name}}</div>
            </draggable>
        </div>
      </draggable>
    </table>
    <h2 class="data_title">Json数据展示</h2>
    <div class="data_main">
      <div  class="data_show" v-for="element in newArray" :key="element.id">{{element}}</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import draggable from 'vuedraggable'
export default {
  name: 'sort',
  data () {
    return {
      choose: 'choose',
      ghostClass: 'ghostClass',
      disabled: false,
      arrayJson: []
    };
  },
  props: {
    newArray: {
      type: Array, 
      default: [
                [{id: 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}], 
                [{id: 4, name: 'D'}, {id: 5, name: 'E'}, {id: 6, name: 'F'}],
                [{id: 7, name: 'G'}, {id: 8, name: 'H'}, {id: 6, name: 'J'}]]
    }
  },
  components: {
    draggable
  },
  computed: {
  }
};
</script>

<style lang='scss' scoped>
  div{
    text-align: center;
  }
  tr{
    width: 100%;
  }
  
  .sort_col_main{
    float: left;
    border-collapse: collapse;
    box-sizing: border-box;
    border:2px solid #000;
    overflow: hidden;
    margin:auto 2px;
  }
  .sort_col_main:last-child{
    border-right:2px solid #000;
  }
  .sort_col_th{
    margin: 0 auto;
  }
  .sort_col_td{
    padding: 5px 10px;
    border-top:1px solid black;
    border-bottom: 1px solid black;
    box-sizing: border-box;
  }
  .sort_col_td:last-child{
    border-bottom: none;
  }
  .sort_col_table{
    overflow: hidden;
    padding: 10px 20px;
  }
  .choose{
    border: 2px solid #fff252!important;
    box-sizing: border-box;
  }
  .ghostClass{
    opacity: 1;
  }
  .data_title{
    font-size: 24px;
  }
  .data_main{
    overflow: hidden;
    margin:0 auto;
    display: flex;
    justify-content: center;
    .data_show{
      font-size: 16px;
      width: 195px;
      margin-right: 40px;
  }
  }
  
</style>
