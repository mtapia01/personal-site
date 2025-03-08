<script setup lang="ts">
  const icons = [
    {icons: 'mdi-linkedin', links:"https://www.linkedin.com/in/michaeltapia01/"},
    {icons: 'mdi-github', links: "https://github.com/mtapia01"},
    {icons: 'mdi-email', links: "mailto:" + "michaeltapia80" + "@" + "yahoo.com" },
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
      <v-row>
        <v-btn
          v-for="(item, index) in icons"
          :key="index"
          :icon="item.icons"
          :href="item.links"
          target="_blank"
          class="mx-4"
          variant="text"
        ></v-btn>
      </v-row>

      <!--    <div class="pt-0">-->
      <!--      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.-->
      <!--    </div>-->

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

</style>
