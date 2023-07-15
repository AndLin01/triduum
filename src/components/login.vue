<script setup>
import { iniciar } from "../controller/login";
import { ref } from "vue";
const form = ref({
  email: "",
  password: "",
});
</script>

<template>
  <form>
    <div id="spiner" class="hidden"></div>
    <img src="../assets/star_wars_logo.png" alt="Star Wars Fans" id="logo" />
    <div class="input-group mb-3">
      <i class="fa-solid fa-user input-group-text d-flex"></i>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        v-model="form.email"
      />
    </div>
    <div class="input-group mb-3">
      <i class="fa-solid fa-key input-group-text d-flex"></i>
      <input
        type="password"
        class="form-control"
        placeholder="Password"
        aria-label="Password"
        v-model="form.password"
      />
    </div>
    <button type="button" class="btn btn-warning" @click="iniciar(form)">
      log in
    </button>
    <p id="error" class="error"></p>
  </form>
</template>

<style scoped>
@import "../styles/login.css";
@import "../styles/spiner.css";
</style>
