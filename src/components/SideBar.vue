<script setup lang="ts">
  import { mdiHome } from '@mdi/js'
  import { mdiAccountBox } from '@mdi/js'
  import { mdiDeveloperBoard } from '@mdi/js'
</script>

<template id="side-bar">
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
        permanent
      >
        <v-list density="compact" nav>
          <v-list-item style="color: #001e1d" :prepend-icon="mdiHome" title="Home" to="/" class="custom-icon-color"></v-list-item>
          <v-list-item style="color: #001e1d" :prepend-icon="mdiAccountBox" title="About Me" to="/about" class="custom-icon-color"></v-list-item>
          <v-list-item style="color: #001e1d" :prepend-icon="mdiDeveloperBoard" title="Projects" to="/projects"></v-list-item>
<!--          <v-list-item style="color: #001e1d" prepend-icon="mdi-human-greeting-proximity" title="Contact" to="/contact"></v-list-item>-->
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 0px; width: 0px">
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>

  .v-navigation-drawer{
    background-color: #abd1c6 !important;
    z-index: 1000;
    position: fixed
  }


</style>
