const apiKey = "559a33d4fee9f2c2b010121bd11bc858";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const filmesID = [
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
];
let filmes = [];

async function renderPosters(id, categoria) {
  filmes.push(
    await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=pt-BR&api_key=2dc6e5babc6cd433199c68a7f1f81d40`
    ).then((res) => res.json())
  );
}
async function getFilmes() {
  for (let i = 0; i < filmesID.length; i++) {
    await renderPosters(filmesID[i].id, filmesID[i].categoria);
  }
  for (let i = 0; i < filmesID.length; i++) {
    filmes[i].categoria = filmesID[i].categoria;
  }
  filmes.sort((a, b) => {
    return b.vote_average - a.vote_average;
  });
}

getFilmes().then(() => {
  console.log(filmes)
  async function createMovieSections() {
    const mainTag = document.querySelector("main");
    const genres = [
      "Historia",
      "Biologia",
      "Filosofia",
      "TI",
      "Esportes",
      "Cinema",
      "Politica",
    ];
    const baseSubtitle = "Descubra filmes, documentários e séries sobre";

    for (let index = 0; index < genres.length; index++) {
      const newSection = document.createElement("section");
      const newGenreDiv = document.createElement("div");
      newGenreDiv.className = `${genres[index]}-title title`;
      
      const genreTitle = document.createElement("h1");
      const genreSubtitle = document.createElement("h5");

      genreTitle.innerHTML = capitalizeFirstLetter(genres[index]);
      genreSubtitle.innerHTML = `${baseSubtitle} ${genres[index]}`;

      const listOfMovies = document.createElement("ul");
      listOfMovies.className = "movies-ul";

      newGenreDiv.appendChild(genreTitle);
      newGenreDiv.appendChild(genreSubtitle);
      newSection.appendChild(newGenreDiv);

      newSection.appendChild(listOfMovies);
      mainTag.appendChild(newSection);
      for (j = 0; j < filmesID.length; j++) {
        if (filmes[j].categoria.includes(genres[index])) {
          let element = document.getElementsByClassName("movies-ul");
          let numberOfChildren = element[index].getElementsByTagName("li").length+1;
          if(numberOfChildren<=10){
          const listElement = document.createElement("li");
          const posterImage = document.createElement("img");
          posterImage.src = `https://image.tmdb.org/t/p/original/${filmes[j].poster_path}`;
          posterImage.className = "poster-image";
          listElement.appendChild(posterImage);
          listOfMovies.appendChild(listElement);
          }
        }
      }
    }
  }
  createMovieSections();
});
let sair = document.getElementById('Sair');
sair.addEventListener('click',()=>{
  localStorage.removeItem('userLogado');
  window.location.href = "../Home/index.html"
})
