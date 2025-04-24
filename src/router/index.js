import { createRouter, createWebHistory } from 'vue-router'

import HeroPage from '../components/Hero.vue'
import TechStack from '../components/TechStack.vue'

const routes = [
  { path: '/', component: HeroPage },
  { path: '/tech', component: TechStack },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
