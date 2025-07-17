<script setup lang="ts">
  const props = defineProps({
    project_media: {type: String, default: ""},
    project_desc: {type: String},
    project_tools: {type: String},
    project_title: {type: String},
  })
  // const computed = {
  const optimizedMedia = () => {
    return this.project_media.replace(/\.(png|jpg)$/, ".webp");
  }
  // }
</script>

<template>
  <v-card class="mx-auto my-4 proj_card" max-width="480" height="580" elevation="2">
    <!-- Project Media (Image or Video) -->
    <div class="media-container">
      <h3>{{ project_title }}</h3>
      <v-img
        v-if="!project_media.endsWith('.mp4')"
        :src="project_media"
        :lazy-src="'@/assets/placeholder.png'"
        height="250"
        width="400"
        contain
        class="project-image"
      ></v-img>

      <video v-else controls class="project-video">
        <source height="250" width="400" :src="project_media" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <v-card-text class="text-center">
      <!-- Project Title -->
      <h3 class="text-h5 font-weight-bold mb-2">{{ project_title }}</h3>

      <!-- Project Description -->
      <p class="text-body-2 text-grey-darken-2 proj_desc">{{ project_desc }}</p>

      <!-- Project Tools -->
      <v-chip-group class="mt-2 tool_chips">
        <v-chip
          v-for="(tool, index) in project_tools.split(',')"
          :key="index"
          variant="elevated"
          class="ma-1"
          color="yellow"
          label
        >
          {{ tool.trim() }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.project-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}
.project-video {
  width: 100%;  /* Adjust width to fit card */
  height: 250px; /* Set a fixed height */
  object-fit: cover; /* Ensures video scales properly */
  border-radius: 8px; /* Optional: Adds rounded corners */
}
h3{
  text-align: center;
  text-color: #fffffe;
}
.proj_card {
  background: #abd1c6;
  border-radius: 12px;
  padding: 5px;
  margin: 2px;
}
.proj_desc{
  color: #abd1c6;
}
.tool_chips{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  color: #f9bc60;
}

.v-chip--variant-elevated{
  background: #f9bc60;
  color: #001e1d;
}
</style>
