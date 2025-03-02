<script setup lang="ts">
import TypingEffect from "@/components/TypingEffect.vue";
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <TypingEffect></TypingEffect>
    <h3>
      University of California Graduate
    </h3>
    <h3>
      Full Stack Developer
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1rem;
}




</style>
