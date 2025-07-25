import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
// import '@mdi/font/css/materialdesignicons.min.css';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRouter, createWebHashHistory } from "vue-router"
import ProjectPage from "@/components/ProjectPage.vue";
import AboutMe from "@/components/AboutMe.vue";
import HomePage from "@/components/HomePage.vue";
const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
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

app.use(router)
app.use(vuetify).mount('#app')


