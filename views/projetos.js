export function renderizarProjetos(projetos) {
  const container = document.getElementById("projetos-container");
  if (!container) return;

  container.innerHTML = "";

  projetos.forEach((p) => {
    const item = document.createElement("div");
    item.classList.add("projeto-item");
    item.innerHTML = `
      <h3>${p.titulo}</h3>
      <p>${p.descricao}</p>
      <p><strong>Tecnologias:</strong> ${p.tecnologias.join(", ")}</p>
      <a href="${p.link}" target="_blank">Ver projeto</a>
    `;
    container.appendChild(item);
  });}