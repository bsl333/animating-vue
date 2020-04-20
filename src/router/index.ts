import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Modal from '@/views/Modal.vue';
import Simple from '@/views/Simple.vue';
import Stagger from '@/views/Stagger.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/list',
    name: 'List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  },
  {
    path: '/drawer',
    name: 'Drawer',
    component: () =>
      import(/* webpackChunkName: "drawer" */ '@/views/Drawer.vue')
  },
  {
    path: '/simple',
    name: 'Simple',
    component: Simple
  },
  {
    path: '/stagger',
    name: 'Stagger',
    component: Stagger
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
