<script setup>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import Film from "../components/filmCard.vue";
import { tokenStore } from "../stores/token";
import { regresar } from "../controller/home";
const token = tokenStore();
const character = token.character;
</script>

<template>
  <Header />
  <div class="content">
    <h1 class="name starWarsFont">{{ character.name }}</h1>
    <ul class="brief_character">
      <li><span class="starWarsFont">Gender</span> {{ character.gender }}</li>
      <li><span class="starWarsFont">Age</span> {{ character.age }}</li>
      <li>
        <span class="starWarsFont">Skin Color</span> {{ character.skin_color }}
      </li>
      <li><span class="starWarsFont">Height</span> {{ character.height }}</li>
      <li><span class="starWarsFont">Mass</span> {{ character.mass }}</li>
    </ul>
    <h1 class="starWarsFont">Films</h1>
    <div v-for="pelicula in character.peliculas" :key="pelicula">
      <Film
        :title="pelicula.title"
        :Opening_paragraph="pelicula.opening_crawl"
        :Directors="pelicula.directors"
        :Producers="pelicula.producers"
        :Release_date="pelicula.release_date"
        :Planets="pelicula.planetas"
      />
    </div>
    <button class="btn regresar" @click="regresar()">Regresar</button>
  </div>
  <Footer />
</template>
