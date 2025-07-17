<script setup lang="ts">
import car_hud from '../assets/images/car_hud.jpg'
import scheduler from '../assets/images/calendar-clock.png'
import discount_poster from '../assets/images/discount.jpg'
import ski_poster from '../assets/images/ski.jpg'


import ProjectCard from "@/components/ProjectCard.vue";
const ski_app_video = "https://res.cloudinary.com/dteqzqhbe/video/upload/v1752771564/ski-companion-app_wkyo3h.mp4"
const discount_video = "https://res.cloudinary.com/dteqzqhbe/video/upload/v1752772282/chrome-extension-demo_zyya4m_xt6kzv.mp4"

const projects = [
  {
    title: 'Car Heads-Up Display',
    media: car_hud,
    link: '',
    tools: 'Python, OpenCV, NumPy',
    project_desc:
      'Developed a Car Heads-Up Display (HUD) that detects and interprets gauge readings. The system calibrates the speedometer, tachometer, and fuel gauge, using image processing and trigonometric calculations to convert needle angles into real-time speed and RPM values.',
  },
  {
    title: 'Chrome Extension Discount Finder',
    media: discount_video,
    link: '',
    tools: 'OpenAI API, JavaScript',
    poster: discount_poster,
    project_desc:
      'Chrome extension that helps you search for both old and new discount codes. By utilizing the ChatGPT API, it finds recent codes for various online stores to help you save money while shopping.',
  },
  {
    title: 'Ski Resort Companion',
    media: ski_app_video,
    link: '',
    tools: 'Remix Labs, Web Scraping',
    poster: ski_poster,
    project_desc:
      'The Ski Resort Companion app provides live updates on road conditions for any state road, highway, or interstate. Using the CalTrans website, it allows users to see if there are any chain control, traffic, or road construction.',
  },
  {
    title: 'Bio Secure Scheduler',
    media: scheduler,
    tools: 'Streamlit, Python, Google OR Tools, SQLite',
    project_desc:
      'Developed a Bio Secure Scheduler for Agrecom, a water treatment, sanitation, and pest control company. The scheduler optimizes job assignments while ensuring compliance with strict quarantine restrictions, automating a previously manual and time-consuming process.',
  },
];
</script>

<template>
  <div class="header_tag">

    <h1>Projects</h1>
  </div>
  <div>
    <v-row justify="start">
      <h2 class="text-center my-4">Here is a list of projects I have created</h2>
    </v-row>

    <v-container>
      <v-row justify="center">
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="2"
          sm="6"
          md="4"
        >
          <ProjectCard
            :project_media="project.media"
            :project_title="project.title"
            :project_desc="project.project_desc"
            :project_tools="project.tools"
            :project_poster="project?.poster"
          />
        </v-col>
      </v-row>
    </v-container>
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
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.header_tag{
    padding-bottom: 10px;
    text-decoration-line: underline;
    font-size: xx-large;
  }
</style>
