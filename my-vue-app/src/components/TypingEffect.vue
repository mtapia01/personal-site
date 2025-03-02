<template>
  <h1 class="typing">
    Hi! I am {{ displayedText }}
  </h1>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const fullText = "Michael";
const displayedText = ref("");
let index = 0;

// const props = defineProps({
//   text: String, // Accept text as a prop
// });

const typeText = () => {
  if (index < fullText.length) {
    displayedText.value += fullText[index];
    index++;
    setTimeout(typeText, 120); // Adjust typing speed (milliseconds)
  }
}

onMounted(() => {
  typeText();
});
</script>


<style scoped>
.typing {
  font-size: 2rem;
  font-weight: bold;
}

</style>
