import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/index.vue';
import Show from './pages/show.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products/:products', component: Show }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});