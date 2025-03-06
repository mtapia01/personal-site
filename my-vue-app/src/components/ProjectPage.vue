<script setup lang="ts">
import ski_app from '../assets/images/ski-companion-app.mp4'
import car_hud from '../assets/images/car_hud.png'
const projects = [
  {media: ski_app, tools: "Remix Labs, Web Scraping", project_desc: "The Ski Resort Companion apps provides live updates on road conditions for any state road, highway, or interstate.\n Using the CalTrans website, it allows users to see if there are any chain control, traffic, or road construction."},
  {media: car_hud, tools:"Python, OpenCV, and NumPy", project_desc: "I developed a Car Heads-Up Display (HUD) that detects and interprets gauge readings. The system calibrates the speedometer, tachometer, and fuel gauge, using image processing and trigonometric calculations to convert needle angles into real-time speed and RPM values. "},
  {media: "", tools:"Python, OpenCV, and NumPy", project_desc: "Developed a Bio Secure Scheduler for Agrecom, a water treatment, sanitation, and pest control company. \n Agrecom’s workers are required to follow strict quarantine restrictions when going from one job site to the next. \n Consequently, schedules need to be created with these constraints in mind, which is currently a manual and time-consuming process. \n Using customer, job, and employee information inputted by a user, an optimal schedule can be generated that follows all of the necessary constraints."},
  {media: "", tools:"", project_desc: ""},
]
</script>

<template>
  <div>
    <h2>Here is a list of projects I have created</h2>
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
</style>
