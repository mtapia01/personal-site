import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import ProjectPage from "@/components/ProjectPage.vue";
import AboutMe from "@/components/AboutMe.vue";
import HomePage from "@/components/HomePage.vue";
import ContactPage from "@/components/ContactPage.vue"
import VueLazyload from 'vue-lazyload';
const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
})

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomePage,
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
  ];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

app.use(VueLazyload);
app.use(router)
app.use(vuetify).mount('#app')


