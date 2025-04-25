import { createRouter, createWebHistory } from 'vue-router'

import HeroPage from '../components/Hero.vue'
import TechStack from '../components/TechStack.vue'
import About from  '../components/About.vue'
import Contact from  '../components/Contact.vue'
const routes = [
  { path: '/', component: HeroPage },
  { path: '/about', component: About },
  { path: '/tech', component: TechStack },
  { path: '/contact', component: Contact },


 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
