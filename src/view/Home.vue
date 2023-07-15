<script setup>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import Character from "../components/characterCard.vue";
import { tokenStore } from "../stores/token";
const token = tokenStore();
const characters = token.characters;
</script>

<template>
  <Header />
  <div class="content">
    <h1>Choose a character</h1>
    <p>For know more info</p>
    <div class="container-cards col-11">
      <div v-for="character in characters" :key="character">
        <Character
          :id="character.id"
          :name="character.name"
          :gender="character.gender"
          :age="character.age"
          :skin_color="character.skin_color"
          :height="character.height"
          :mass="character.mass"
        />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style>
@import "../styles/base.css";
@import "../styles/home.css";
@import "../styles/charapterCard.css";
</style>
