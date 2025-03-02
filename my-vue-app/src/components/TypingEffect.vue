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
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid white; /* Cursor effect */
  animation: blink 0.7s infinite;
}

h1 {
  margin-right: 5px; /* Reduce right margin */
  display: inline-block; /* Ensure the bar stays close */
}

@keyframes blink {
  50% { border-color: transparent; }
}

</style>
