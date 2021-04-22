import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld1 from './components/HelloWorld1.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
    //   {
    //     path: '/',
    //     redirect: '/clients'
    //   },
      {
        path: '/clients',
        name: 'clients',
        component: HelloWorld1
      }
    //   {
    //     path: '/words/new',
    //     name: 'new-word',
    //     component: New
    //   },
    //   {
    //     path: '/words/:id',
    //     name: 'show',
    //     component: Show
    //   },
    //   {
    //     path: '/words/:id/edit',
    //     name: 'edit',
    //     component: Edit
    //   },
    //   {
    //     path: '/test',
    //     name: 'test',
    //     component: Test
    //   }
    ]
  });