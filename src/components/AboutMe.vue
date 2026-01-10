<script setup lang="ts">
import TechList from "@/components/TechList.vue";
import snowboarding from '../assets/images/snowboarding.jpg'
import concert from '../assets/images/concert.jpg'
import travel from '../assets/images/travel.jpg';

  const images = [
    { src: snowboarding, caption: "Snowboarding Adventure 🏂" },
    { src: travel, caption: "Exploring the World ✈️" },
    { src: concert, caption: "Live Music 🎶" },
    { src: "https://res.cloudinary.com/dteqzqhbe/image/upload/v1752771568/cars_i3thpx.jpg", caption: "Love for Cars 🚗" },
  ];
</script>

<template>
  <div class="header_tag">
    <h1>About Me</h1>
  </div>
  <v-row justify="start">
    <h1>Who am I?</h1>
    <div class="about_div">
      I came to UC Merced in August 2020 and graduated in May 2024 with a degree in <span class="degree_underline">Computer Science and Engineering</span>.
      Early on, I gained hands-on experience by building and maintaining a production website, where I developed a strong foundation in web development and discovered an interest in working across the stack.
      Today, I work as a Full Stack Engineer developing data-driven web applications, with a focus on performance, usability, and reliable production deployments.
    </div>
    <br />
  </v-row>

<!--  <h2>Hobbies</h2>-->
  <div class="about_div">
    <p>These are the things I am into!</p>
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item, index) in images" :key="index" :src="item.src" cover eager>
        <v-container class="fill-height d-flex align-end">
          <v-row justify="center">
            <v-col cols="12" class="text-center">
              <v-sheet color="rgba(0, 0, 0, 0.6)" class="pa-2 rounded">
                <span class="text-white">{{ item.caption }}</span>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
  </v-carousel>
  </div>
    <h2>Here are some of the tools I like using:</h2>
    <TechList></TechList>
    <h3>See my other projects here</h3>
  <div style="align-content: center">
    <v-btn class="proj_btn" to="/projects">Projects</v-btn>
  </div>
</template>

<style scoped>

  .about_div{
    font-size: 22px;
    color: #e8e4e6;
    padding-bottom: 15px;
    text-align: left;
  }
  .header_tag{
    padding-bottom: 10px;
    text-decoration-line: underline;
    font-size: xx-large;
  }
  h3{
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .degree_underline{
    text-decoration-line: underline;
    text-decoration-color: #f9bc60;
    text-decoration-style: solid;
  }
  .proj_btn{
    background: #f9bc60;
  }
</style>
