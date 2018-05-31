<template>
  <div>
    <sort :new-array="useArray" class="sort_class"></sort>
  </div>
</template>

<script>
/* eslint-disable */
import sort from '@/components/sort';
export default {
  name: 'Sort',
  data () {
    return {
      useArray: [
        [
          {
            id: 1, name: '66'
          },
          {
            id: 2, name: '77'
          },
          {
            id: 3, name: '88'
          },
          {
            id: 4, name: '99'
          },
          {
            id: 5, name: '00'
          }
        ],
        [
          {
            id: 1, name: 'ap'
          },
          {
            id: 2, name: 'ab'
          },
          {
            id: 3, name: 'ac'
          },
          {
            id: 4, name: 'am'
          },
          {
            id: 5, name: 'ak'
          }
        ],
        [
          {
            id: 1, name: '11'
          },
          {
            id: 2, name: '22'
          },
          {
            id: 3, name: 'CfNgD'
          },
          {
            id: 4, name: '44'
          },
          {
            id: 5, name: '55'
          }
        ]
      ],
      choose: 'choose',
      ghostClass: 'ghostClass',
      disabled: false,
    };
  },
  components: {
    sort
  }
};
</script>

<style lang='scss' scoped>
</style>
