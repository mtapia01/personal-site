<script setup lang="ts">
import TypingEffect from "@/components/TypingEffect.vue";
// import {RouterLink} from "vue-router";

</script>

<template>
  <v-card class="left">
    <TypingEffect></TypingEffect>
    <h3>
      University of California Graduate
    </h3>
    <h3>
      Full Stack Developer
    </h3>
    <v-divider class="ma-5" :thickness="4" vertical></v-divider>
  </v-card>
  <!--  <br>-->
  <v-card class="right">
    <v-btn to="/about">Click to Enter</v-btn>
  </v-card>
</template>

<style scoped>
</style>
