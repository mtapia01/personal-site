<script setup lang="ts">
  import { mdiHome } from '@mdi/js'
  import { mdiAccountBox } from '@mdi/js'
  import { mdiDeveloperBoard } from '@mdi/js'
  import { mdiEmailEdit } from '@mdi/js';
</script>

<template id="side-bar">
  <v-layout>
    <v-navigation-drawer
      expand-on-hover
      rail
      permanent
    >
      <v-list density="compact" nav>
        <v-list-item style="color: #001e1d" :prepend-icon="mdiHome" title="Home" to="/" class="custom-icon-color"></v-list-item>
        <v-list-item style="color: #001e1d" :prepend-icon="mdiAccountBox" title="About" to="/about" class="custom-icon-color"></v-list-item>
        <v-list-item style="color: #001e1d" :prepend-icon="mdiDeveloperBoard" title="Projects" to="/projects"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<style scoped>
  .v-navigation-drawer {
    background-color: #abd1c6 !important;
    z-index: 1000;
  }
</style>