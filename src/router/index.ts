import { createRouter, createWebHistory } from 'vue-router';
import RouterConfig from './routerConfig';

const router = createRouter({
  history: createWebHistory(),
  routes: RouterConfig,
});

export default router;
