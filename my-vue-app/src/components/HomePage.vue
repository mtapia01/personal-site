<script setup lang="ts">
import TypingEffect from "@/components/TypingEffect.vue";
// import {RouterLink} from "vue-router";

</script>

<template>
  <div class="main_homepage">
    <TypingEffect></TypingEffect>
    <h3>
      University of California Graduate
    </h3>
    <h3>
      Full Stack Developer
    </h3>
  </div>

  <v-divider class="ma-5" :thickness="4" vertical></v-divider>
  <br />
  <v-btn class="home_btn" to="/about">Enter</v-btn>

</template>

<style scoped>
.main_homepage{
  font-size: 1rem;
  text-align: center;
  padding-top: 10%;
}
.home_btn {
  background: #f9bc60;
}
</style>
