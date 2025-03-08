<script setup lang="ts">
import TechList from "@/components/TechList.vue";
import snowboarding from '../assets/images/snowboarding.jpg'
import concert from '../assets/images/concert.jpg'
import cars from '../assets/images/cars.png'
import travel from '../assets/images/travel.jpg';

const images = [
  { src: snowboarding, caption: "Snowboarding Adventure 🏂" },
  { src: travel, caption: "Exploring the World ✈️" },
  { src: concert, caption: "Live Music 🎶" },
  { src: cars, caption: "Love for Cars 🚗" },
];
</script>

<template>
  <div class="header_tag">
    <h1>About Me</h1>
  </div>
  <v-row justify="start">
    <h2>Who am I?</h2>
    <div class="about_div">
      Originally from the Central Valley, I came to UC Merced in 2020 and graduated May 2024 with a degree in <span class="degree_underline">Computer Science
    and Engineering</span>. I became very passionate about web development my first year where I had to develop and maintain a website.
      It was here I learned the fundamentals of programming and became invested in improving my skill-set.
    </div>
    <br />
  </v-row>

  <h2>Hobbies</h2>
  <div class="about_div">
    <p>These are the things I am into!</p>
    <v-carousel hide-delimiters>
    <v-carousel-item v-for="(item, index) in images" :key="index" :src="item.src" cover>
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
<!--  <v-row >-->
    <h2>Here are the tools I like using!</h2>
    <TechList></TechList>
    <h3>See my other projects here</h3>
<!--  </v-row>-->

  <v-btn class="proj_btn" to="/projects">Projects</v-btn>
</template>

<style scoped>

  .about_div{
    font-size: 22px;
    color: #e8e4e6;
    padding-bottom: 15px;
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
