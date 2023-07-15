<script setup>
import { brief_character } from "../controller/home";
defineProps({
  id: Number,
  name: String,
  gender: String,
  age: Number,
  skin_color: String,
  height: Number,
  mass: Number,
});
</script>
<template>
  <div class="charapterCard">
    <div class="col-sm-5 left">{{ name }}</div>
    <div class="col-sm-7 right">
      <ul>
        <li><span class="starWarsFont">Gender</span> {{ gender }}</li>
        <li><span class="starWarsFont">Age</span> {{ age }}</li>
        <li><span class="starWarsFont">Skin Color</span> {{ skin_color }}</li>
        <li><span class="starWarsFont">Height</span> {{ height }}</li>
        <li><span class="starWarsFont">Mass</span> {{ mass }}</li>
      </ul>
      <button class="btn" @click="brief_character(id)">more info</button>
    </div>
  </div>
</template>
