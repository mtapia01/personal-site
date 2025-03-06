<script setup lang="ts">
const tools = [
  { name: "Git", image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
  { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "Vue.js", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" },
  { name: "React.js", image: "https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg" },
  { name: "Node.js", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Django", image: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" },
  { name: "Flask", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" },
  { name: "SQLite", image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg" },
];


</script>

<template>
  <div class="slider">
<!--    <h2>-->
<!--      Here are some of the tools I use-->
<!--    </h2>-->
    <div class="slide-track">
      <div v-for="(tool, index) in tools" :key="index" class="slide">
        <img :src="tool.image" :alt="tool.name" />
      </div>
      <!-- Duplicate for infinite loop effect -->
      <div v-for="(tool, index) in tools" :key="'dup-' + index" class="slide">
        <img :src="tool.image" :alt="tool.name" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 40%;
  padding: 10px 0;
  border-radius: 50px;
}

.slide-track {
  display: flex;
  width: calc(150px * 10);
  animation: scroll 25s linear infinite;
  background-color: #abd1c6;

}

.slide {
  width: 100px;
  padding: 10px;
}

.slide img {
  width: 75%;
  height: auto;
}

@media (max-width: 768px) {
  .slider {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
    padding: 10px 0;
  }
}



@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* Move by half the duplicated slides */
}
</style>
