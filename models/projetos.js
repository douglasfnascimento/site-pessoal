export async function buscarProjetos() {
  const resposta = await fetch("https://my-json-server.typicode.com/douglasfnascimento/site-pessoal/projetos");
  if (!resposta.ok) {
    throw new Error("Erro ao buscar os projetos");
  }
  return await resposta.json();
}