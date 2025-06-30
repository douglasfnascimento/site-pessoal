import { iniciarServicos } from "./views/servicosView.js";
import { iniciarFormulario } from "./views/contatoView.js";
import { iniciarCountdown } from "./controllers/countdownController.js";
import { iniciarProjeto } from "./controllers/projetosController.js";

document.addEventListener("DOMContentLoaded", () => {
  iniciarServicos();
  iniciarFormulario();
  iniciarCountdown();
  iniciarProjeto();
});