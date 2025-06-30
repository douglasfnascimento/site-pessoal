import { iniciarServicos } from "./views/servicos.js";
import { iniciarFormulario } from "./views/contato.js";
import { iniciarCountdown } from "./controllers/countdown.js";
import { iniciarProjeto } from "./controllers/projetos.js";

document.addEventListener("DOMContentLoaded", () => {
  iniciarServicos();
  iniciarFormulario();
  iniciarCountdown();
  iniciarProjeto();
});