const filmes_dados = [
    { id: "tt0995868", categoria: "Historia Esportes" },
    { id: "tt5013056", categoria: "Historia" },
    { id: "tt1016150", categoria: "Historia" },
    { id: "tt0129290", categoria: "Medicina" },
    { id: "tt0386792", categoria: "Medicina Historia" },
    { id: "tt0137523", categoria: "Cinema" },
    { id: "tt1186830", categoria: "Historia" },
    { id: "tt1285016", categoria: "Computação Historia" },
    { id: "tt2084970", categoria: "Computação Historia" },
    { id: "tt2119532", categoria: "Historia" },
    { id: "tt8404614", categoria: "Historia Politica" },
    {id:"tt0914798", categoria: "Historia Politica"},
    {id:"tt0857355", categoria: "Historia Politica"},
    {id:"tt0318462", categoria:"Historia Politica Filosofia"},
    {id:"tt0271383",categoria:"Cinema"}
  ];
  let filmes= [];
  let str = "";
  const divFilmes = document.getElementById("filmes");
  async function getFilmes() {
    for (let i = 0; i < filmes_dados.length; i++) {
     filmes.push(await fetch(
      `https://api.themoviedb.org/3/movie/${filmes_dados[i].id}?language=pt-BR&api_key=9dc50403f55b4f55a2b4477b32915e7c`
    ).then((res) => res.json()));
  }
  return filmes;
  }
  async function preencherFilmes(filmes_dados) {
      getFilmes().then((filme) => {
        for (let i = 0; i < filme.length; i++) {
          str += `<div class="filme ${filmes_dados[i].categoria} col-md-3 col-sm-4" onclick="openCard(${i})">
                  <img src="https://image.tmdb.org/t/p/original/${filme[i].poster_path}" class="img_filme">
                  <h2 class="titulo_filme">${filme[i].title}</h2>
          </div>`;
          divFilmes.innerHTML = str;
        }
      });
    }
  preencherFilmes(filmes_dados)