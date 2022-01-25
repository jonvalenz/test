import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import RouteNames from '@/constants/route-names';
import Home from '../views/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteNames.Home,
    component: Home,
  },
  {
    path: '/feed',
    name: RouteNames.Feed,
    component: () => import('../views/feed.vue'),
  },
  {
    path: '/edit/:id',
    name: RouteNames.Edit,
    component: () => import('../views/edit.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
