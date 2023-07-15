import router from "../routes/routes";
import { tokenStore } from "../stores/token";

export async function brief_character(id) {
  let tokens = tokenStore();
  tokens.character = tokens.characters.find((character) => character.id == id);
  router.replace({ path: `/character/${id}` });
}

export async function regresar() {
  let tokens = tokenStore();
  tokens.character = {};
  router.replace({ path: "/home" });
}
