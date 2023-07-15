<script setup>
import { cerrar } from "../controller/login";
</script>
<template>
  <div class="col-12 header">
    <img
      src="../assets/star_wars_logo.png"
      alt="Star Wars Fans"
      id="logo_header"
    />
    <div id="logout" @click="cerrar()">
      <span>Log out </span>
      <i class="fa-solid fa-right-from-bracket"></i>
    </div>
  </div>
</template>
