export async function iniciarProjeto() {
  try {
    const resposta = await fetch("https://my-json-server.typicode.com/douglasfnascimento/site-pessoal/projetos");
    const projetos = await resposta.json();
    const container = document.getElementById("projetos-container");

    if (container) {
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
      });
    }
  } catch (e) {
    console.error("Erro ao carregar projetos:", e);
  }
}