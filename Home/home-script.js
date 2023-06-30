
const apiKey = '559a33d4fee9f2c2b010121bd11bc858';

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


  const filmes = [
    { id: "tt0995868", categoria: "Historia Esportes" },
  { id: "tt5013056", categoria: "Historia" },
  { id: "tt1016150", categoria: "Historia" },
  { id: "tt0129290", categoria: "Medicina" },
  { id: "tt0386792", categoria: "Medicina Historia" },
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
  ]


async function renderPosters(id,listOfMovies){
 let filme = await fetch(
  `https://api.themoviedb.org/3/movie/${id}?language=pt-BR&api_key=2dc6e5babc6cd433199c68a7f1f81d40`
).then(res=>res.json()).then(filme=>{
 const listElement = document.createElement("li");
 const posterImage = document.createElement("img");
 posterImage.src =`https://image.tmdb.org/t/p/original/${filme.poster_path}`
 posterImage.className = "poster-image"
 listElement.appendChild(posterImage);
 listOfMovies.appendChild(listElement)});
}

async function createMovieSections() {
  const mainTag = document.querySelector('main');
  const genres = ['Historia', 'Medicina', 'Filosofia','TI','Esportes','Cinema','Politica'];
  const baseSubtitle = "Descubra filmes, documentários e séries sobre";

  for (let index = 0; index < genres.length; index ++) {
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
    for(j=0;j<filmes.length;j++){
      console.log("categoria:",filmes[j].categoria)
      console.log("genero:",genres[index])
      console.log("bool:",filmes[j].categoria.includes(genres[index]))
      if(filmes[j].categoria.includes(genres[index])){
        await renderPosters(filmes[j].id,listOfMovies);
      }
    }
    
  };
};
createMovieSections();