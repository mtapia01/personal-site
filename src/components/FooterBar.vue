<script setup lang="ts">
  import { mdiLinkedin, mdiGithub, mdiEmail } from '@mdi/js'
  const icons = [
    {icons: mdiLinkedin, links:"https://www.linkedin.com/in/michaeltapia01/"},
    {icons: mdiGithub, links: "https://github.com/mtapia01"},
    {icons: mdiEmail, links: "mailto:" + "michaeltapia80" + "@" + "yahoo.com" },
  ]
</script>

<template class="footer_main">
  <div class="page-container">

    <v-footer
      class=" text-center d-flex flex-column footer"
    >
      <v-divider
        :thickness="2"
        class="border-opacity-100 footer_divide"
      ></v-divider>
      <div class="icon-links">
        <a v-for="(icon, index) in icons" :key="index" :href="icon.links" target="_blank" rel="noopener noreferrer">
          <svg class="icon" viewBox="0 0 24 24">
            <path :d="icon.icons" />
          </svg>
        </a>
      </div>


      <v-divider></v-divider>

      <div>
        <strong>Michael Tapia - Full Stack Developer</strong>
      </div>
    </v-footer>
  </div>
</template>

<style scoped>
.footer{
  background: #004643;
  color: #e8e4e6;
}
.footer_divide{
  padding-top: 50px;
}
.page-container {
  display: grid;
  grid-template-rows: 1fr auto; /* Content takes available space, footer takes auto height */
  min-height: 10vh; /* Ensure the container takes at least the full viewport height */
}

.footer_main {
  background-color: #f4f4f4; /* Add a background color */
  padding: 10px; /* Add padding for better appearance */
  text-align: center; /* Center the content */
}

.icon {
  width: 35px;
  height: 35px;
  fill: currentColor;
  margin: 0 8px;
}
.icon-links a {
  color: #001e1d;
  transition: color 0.2s ease;
}
.icon-links a:hover {
  color: #f9bc60;
}


</style>
