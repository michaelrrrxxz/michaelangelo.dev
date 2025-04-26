import { createRouter, createWebHistory } from 'vue-router'

import HeroPage from '../pages/Hero.vue'
import TechStack from '../pages/TechStack.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import NotFound from '../errors/NotFound.vue'

const routes = [
  { path: '/', component: HeroPage },
  { path: '/about', component: About },
  { path: '/tech', component: TechStack },
  { path: '/contact', component: Contact },
  

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
