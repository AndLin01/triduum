import { defineStore } from "pinia";

export const tokenStore = defineStore("token", {
  state: () => {
    return {
      token: "",
      characters: [],
      character: {},
    };
  },
  persist: true,
});
