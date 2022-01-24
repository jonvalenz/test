import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Routes from '@/models/route-names';
import Home from '../views/home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: Routes.Home,
    component: Home,
  },
  {
    path: '/feed',
    name: Routes.Feed,
    component: () => import('../views/feed.vue'),
  },
  {
    path: '/edit/:id',
    name: Routes.Edit,
    component: () => import('../views/edit.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
