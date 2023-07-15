// Componets
import Login from "../view/Login.vue";
import Home from "../view/Home.vue";
import Charapter from "../view/character_brief.vue";

import { createRouter, createWebHistory } from "vue-router";
import { tokenStore } from "../stores/token";

let routes = [
  { path: "/", name: "Login", component: Login },
  { path: "/home", name: "Home", component: Home },
  { path: "/character/:id", name: "Character", component: Charapter },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  let token = tokenStore();
  if (token.token == "" && to.name != "Login") {
    return { path: "/" };
  } else if (token.token != "") {
    if (to.name != "Home" && to.name != "Character") {
      return { path: "/" };
    }
  }
});

export default router;
