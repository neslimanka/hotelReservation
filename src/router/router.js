import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Landspace from '../views/Landspace.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/landspace',
    name: 'Landspace',
    component: Landspace,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

