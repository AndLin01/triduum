import axios from "axios";
import router from "../routes/routes";
import { tokenStore } from "../stores/token";

export async function iniciar(form) {
  let tokens = tokenStore();
  let spiner = document.getElementById("spiner");
  let errorText = document.getElementById("error");
  try {
    if (form.email != "" && form.password != "") {
      spiner.classList.toggle("hidden");
      // realiza peticion al servidor
      const res = await axios.post(
        "http://localhost:8000/api-auth/login/",
        form
      );
      // guarda el token en pinia
      tokens.token = res.data;
      // Pide los personajes
      const characters = await axios.get(
        `http://localhost:8000/api/v1/characters/`,
        {
          headers: {
            authorization: `Bearer ${tokens.token.access}`,
          },
        }
      );
      // guarda los characters en pinia
      tokens.characters = characters.data.results;
      // redirecciona a la pagina de inicio
      router.replace({ path: "/home" });
    } else {
      // cambia el mensaje de error
      errorText.innerHTML = "Algun campo esta vacio";
      // muestra un mensaje de error encima de los inputs
      if (errorText.classList.contains("hidden")) {
        errorText.classList.toggle("hidden");
      }
    }
  } catch (e) {
    if (e.toJSON().status == 401) {
      // cambia el mensaje de error
      errorText.innerHTML = "Usuario o contraseña inválida";
      // muestra un mensaje de error encima de los inputs
      if (errorText.classList.contains("hidden")) {
        errorText.classList.toggle("hidden");
      }
      spiner.classList.toggle("hidden");
    } else {
      alert(e);
      spiner.classList.toggle("hidden");
      tokens.$reset();
    }
  }
}

export async function cerrar() {
  let tokens = tokenStore();
  tokens.token = "";
  router.replace({ path: "/" });
}
