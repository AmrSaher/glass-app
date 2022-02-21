import { createRouter, createWebHistory } from 'vue-router';
import AllApps from '../views/AllApps.vue';

const routes = [
  {
    path: '/',
    name: 'AllApps',
    component: AllApps
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
