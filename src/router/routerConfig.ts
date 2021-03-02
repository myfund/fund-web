import { RouteRecordRaw } from 'vue-router';

export default [
  {
    path: '/',
    component: () => import('../layout/Main.vue'),
    children: [
      {
        path: '/',
        name: 'FundList',
        meta: {
          title: '全部',
        },
        component: () => import('../views/FundList.vue'),
      },
      {
        path: '/my-fund',
        name: 'MyFundList',
        meta: {
          title: '自选',
        },
        component: () => import('../views/MyFundList.vue'),
      },
    ] as RouteRecordRaw[],
  },
] as RouteRecordRaw[];
