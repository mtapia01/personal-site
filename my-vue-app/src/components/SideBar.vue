<script setup lang="ts">

</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list density="compact" nav>
          <v-list-item style="color: white" prepend-icon="mdi-account-box" title="About Me" to="/about" class="custom-icon-color"></v-list-item>
          <v-list-item style="color: white" prepend-icon="mdi-developer-board" title="Projects" to="/projects"></v-list-item>
          <v-list-item style="color: white" prepend-icon="mdi-human-greeting-proximity" title="Contact" to="/contact"></v-list-item>
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
    background: #282828;
  }

  .v-list{
    .custom-icon-color .v-list-item {
      color: white;
    }
  }

</style>
