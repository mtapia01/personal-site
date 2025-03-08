import { createRouter, createWebHistory } from 'vue-router'
import ProjectPage from '@/components/ProjectPage.vue'
import AboutMe from "@/components/AboutMe.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import {createVuetify} from 'vuetify';


const vuetify = createVuetify({
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMe,
    },
  ],
})

export default router
