function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  campoPesquisa = campoPesquisa.toLowerCase();

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nenhum atleta encontrado</p>"
    return;
  }

  // Inicializa uma string vazia para armazenar os resultados HTML
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada item de dado (assumindo que 'dados' é um array de objetos)
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase()
    // se o titulo includes campoPesquisa
    // então será executado o código entre chaves.

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói o HTML para cada item, formatando com template literals
      resultados += `
      <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
      </div>
    `;
    }
  }

  if (!resultados) {
    resultados = "<p> Nada foi encontrado! Você precisa digitar o nome de um atleta ou esporte.</p>"
  }
  // Atribui o HTML gerado para a seção, substituindo o conteúdo anterior
  section.innerHTML = resultados;
}
