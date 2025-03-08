<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue';
import FooterBar from "@/components/FooterBar.vue";
</script>

<template>
  <SideBar></SideBar>
  <body>
    <router-view></router-view>
  <!--    <HelloWorld></HelloWorld>-->
  </body>
  <footer>

    <FooterBar></FooterBar>
  </footer>
</template>

<style scoped>
</style>
