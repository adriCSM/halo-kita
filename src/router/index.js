import { createRouter, createWebHistory } from 'vue-router';
import BrandaView from '../views/BrandaView.vue';

const routes = [
  {
    path: '/',
    name: 'Branda',
    component: BrandaView,
  },
  {
    path: '/riwayat',
    name: 'Riwayat',
    component: () => import('../views/BrandaView.vue'),
  },
  {
    path: '/artikel',
    name: 'Artikel',
    component: () => import('../views/BrandaView.vue'),
  },
  {
    path: '/aplikasi',
    name: 'Aplikasi',
    component: () => import('../views/BrandaView.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/BrandaView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
