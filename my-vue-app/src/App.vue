<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TechList from "@/components/TechList.vue";
import FooterBar from "@/components/FooterBar.vue";
import SideBar from './components/SideBar.vue';
</script>

<template>
  <SideBar></SideBar>
  <header>
    <div class="wrapper">

      <div>
        <HelloWorld msg="Hi! I am Michael." />
      </div>


    </div>
    <v-divider class="ma-5" :thickness="4" vertical></v-divider>

    <TechList></TechList>
  </header>
<!--    <FooterBar></FooterBar>-->
<!--  <RouterView />-->
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}



.logo {
  display: block;
  margin: 0 auto 2rem;
}

.left_sec{
  margin-left: 100px;
}

nav {
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.custom-icon-color .v-list-item__icon {
    color: white;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    justify-content: space-between; /* Adjust space between divs */
    align-items: center; /* Align content vertically */
  }
  .left, .right {
    width: 50%; /* Each div takes up 50% of the width */
    padding: 10px;
    text-align: center;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
