<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue';
</script>

<template>
  <SideBar></SideBar>
  <body>
    <router-view></router-view>
  <!--    <HelloWorld></HelloWorld>-->
  </body>
</template>

<style scoped>
</style>
