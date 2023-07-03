const filmes_dados = [
  { id: "tt0995868", categoria: "Historia Esportes" },
  { id: "tt5013056", categoria: "Historia" },
  { id: "tt1016150", categoria: "Historia" },
  { id: "tt0129290", categoria: "Biologia" },
  { id: "tt0386792", categoria: "Biologia Historia" },
  { id: "tt0137523", categoria: "Cinema" },
  { id: "tt1186830", categoria: "Historia" },
  { id: "tt1285016", categoria: "TI Historia" },
  { id: "tt2084970", categoria: "TI Historia" },
  { id: "tt2119532", categoria: "Historia" },
  { id: "tt8404614", categoria: "Historia Politica" },
  { id: "tt0914798", categoria: "Historia Politica" },
  { id: "tt0857355", categoria: "Historia Politica" },
  { id: "tt0318462", categoria: "Historia Politica Filosofia" },
  { id: "tt0271383", categoria: "Cinema" },
  { id: "tt0120382", categoria: "Cinema Filosofia" },
  { id: "tt0133093", categoria: "Cinema Filosofia" },
  { id: "tt0050976", categoria: "Cinema Filosofia" },
  { id: "tt0478304", categoria: "Cinema Filosofia" },
  { id: "tt0044741", categoria: "Cinema Filosofia" },
  { id: "tt4319088", categoria: "Filosofia Historia" },
  { id: "tt6026818", categoria: "Biologia" },
];
let filmes = [];
let str = "";
const divFilmes = document.getElementById("filmes");
async function getFilmes() {
  for (let i = 0; i < filmes_dados.length; i++) {
    filmes.push(
      await fetch(
        `https://api.themoviedb.org/3/movie/${filmes_dados[i].id}?language=pt-BR&api_key=2dc6e5babc6cd433199c68a7f1f81d40`
      ).then((res) => res.json())
    );
  }
  return filmes;
}
async function preencherFilmes(filmes_dados) {
  getFilmes().then((filme) => {
    for (let i = 0; i < filme.length; i++) {
      if (filme[i].success != false) {
        str += `<div class="filme ${filmes_dados[i].categoria} col-md-2 col-sm-5" onclick="openCard(${i})">
                <img src="https://image.tmdb.org/t/p/original/${filme[i].poster_path}" class="img_filme">
                <h2 class="titulo_filme">${filme[i].title}</h2>
        </div>`;
        divFilmes.innerHTML = str;
      }
    }
  });
}
preencherFilmes(filmes_dados);
