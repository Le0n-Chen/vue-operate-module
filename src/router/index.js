import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/index';
import Page from '@/views/page';
import Sort from '@/views/sortPage';
import Operate from '@/views/operate';
Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'home',
      component: Home
    },
    {
      path: '/json',
      name: 'page',
      component: Page
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },
    {
      path: '/operate',
      name: 'operate',
      component: Operate
    }
  ]
});
