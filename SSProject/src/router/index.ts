import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/Home.vue";
import history from "@/views/History.vue";
import icons from "@/views/Icons.vue";
import tourism from "@/views/Tourism.vue";
import religion from "@/views/Religion.vue";

const routes = [
  { path: '/', name: 'Home', component: home},
  { path: '/history', name: 'History', component: history},
  { path: '/icons', name: 'Icons', component: icons},
  { path: '/tourism', name: 'Tourism', component: tourism},
  { path: '/religion', name: 'Religion', component: religion},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
