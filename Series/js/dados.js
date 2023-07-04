const series_dados = [
  { id: "42009", categoria: "TI Politica " },
  { id: "1416", categoria: "Biologia " },
  { id: "71712", categoria: "Biologia " },
  { id: "60574", categoria: "Historia " },
  { id: "44217", categoria: "Historia " },
  { id: "70523", categoria: "Filosofia Cinema " },
  { id: "46296", categoria: "Historia " },
  { id: "82856", categoria: "Cinema " },
  { id: "97546", categoria: "Esportes " },
  { id: "71912", categoria: "Historia " },
];
let filmes = [];
let str = "";
const divFilmes = document.getElementById("filmes");
async function getFilmes() {
  for (let i = 0; i < series_dados.length; i++) {
    filmes.push(
      await fetch(
        `https://api.themoviedb.org/3/tv/${series_dados[i].id}?language=pt-BR&api_key=9c2e6879162ce82b942e133e94500399`
      ).then((res) => res.json())
    );
  }
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
