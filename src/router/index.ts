import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: () => import('../layout/Main.vue'),
      children: [
        {
          path: '/',
          name: 'FundList',
          component: () => import('../views/FundList.vue'),
        },
      ],
    },
  ],
});

export default router;
