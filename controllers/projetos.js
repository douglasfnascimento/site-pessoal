import { buscarProjetos } from "../models/projetos.js";
import { renderizarProjetos } from "../views/projetos.js";

export async function iniciarProjeto() {
  try {
    const projetos = await buscarProjetos();
    renderizarProjetos(projetos);
  } catch (e) {
    console.error("Erro ao carregar projetos:", e);
  }
}