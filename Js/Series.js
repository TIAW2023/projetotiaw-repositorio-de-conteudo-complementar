const series_dados = [
    { id: "42009", categoria: "Historia Esportes" },
  ];
  let filmes = [];
  let str = "";
  const divFilmes = document.getElementById("filmes");
  async function getFilmes() {
    for (let i = 0; i < series_dados.length; i++) {
      filmes.push(
        await fetch(
          `https://api.themoviedb.org/3/tv/${series_dados[i].id}?language=pt-BR&api_key=2dc6e5babc6cd433199c68a7f1f81d40`
        ).then((res) => res.json())
      );
    }
    console.log(filmes);
    return filmes;
  }
  async function preencherFilmes(series_dados) {
    getFilmes().then((filme) => {
      for (let i = 0; i < filme.length; i++) {
        if (filme[i].success != false) {
          str += `<div class="filme ${series_dados[i].categoria} col-md-2 col-sm-5" onclick="openCard(${i})">
                  <img src="https://image.tmdb.org/t/p/original/${filme[i].poster_path}" class="img_filme">
                  <h2 class="titulo_filme">${filme[i].name}</h2>
          </div>`;
          divFilmes.innerHTML = str;
        }
      }
    });
  }
  preencherFilmes(series_dados);
  