import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        children: [
          {
            path: '/folders/:folderSlug',
            component: () => import('pages/IndexPage.vue'),
          },
          {
            path: '/folders/:folderSlug/notes/:noteId',
            component: () => import('pages/IndexPage.vue'),
          },
          {
            path: '/notes/:noteId',
            component: () => import('pages/IndexPage.vue'),
          },
        ],
      },
      { path: '/design', component: () => import('pages/DesignPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
