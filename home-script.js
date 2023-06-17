function createNavLinks() {
  const menuLinks = ["Home", "Perfil", "Login", "Cadastro", "Sugestão", "Filmes", "Séries"];
  const navLinks = document.querySelector('.nav-links');

  for (let index = 0; index < menuLinks.length; index++) {
    let newListElement = document.createElement("li");
    let newLink = document.createElement("a");
    newLink.innerHTML = menuLinks[index];
    newListElement.appendChild(newLink);
    navLinks.appendChild(newListElement);
  }
}
createNavLinks();

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function fetchMovies(genre, moviesPerPage, apiKey) {
  const genres_ids = {
    guerra: 10752,
    música: 10402,
    história: 36
  }
  const currentGenreId = genres_ids[genre];
  console.log(currentGenreId);

  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${currentGenreId}&page=1&language=pt-BR&sort_by=popularity.desc&include_adult=false&vote_average.gte=10`);
    const data = await response.json();
    const filtermovies = data.results.filter(movie => movie.poster_path)
    const movies = filtermovies.slice(0, moviesPerPage);
    return movies;
  } catch (error) {
    console.error('Ocorreu um erro ao buscar os filmes:', error);
    return [];
  }
}

function getMoviePoster(movie) {
  return `https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`; 
}

async function renderPosters(listOfMovies, genre) {
  const apiKey = '559a33d4fee9f2c2b010121bd11bc858';
  const moviesPerPage = 5;
  const movies = await fetchMovies(genre, moviesPerPage, apiKey) || [];
  for (let index = 0; index < moviesPerPage; index ++) {
    const listElement = document.createElement("li");
    const posterImage = document.createElement("img");
    posterImage.src = getMoviePoster(movies[index]);
    posterImage.className = "poster-image"

    listElement.appendChild(posterImage);
    listOfMovies.appendChild(listElement)    
  };
}

async function createMovieSections() {
  const mainTag = document.querySelector('main');
  const genres = ['história', 'guerra', 'música'];
  const baseSubtitle = "Descubra filmes, documentários e séries sobre";

  for (let index = 0; index < genres.length; index ++) {
    const newSection = document.createElement("section");
    const newGenreDiv = document.createElement("div");
    newGenreDiv.className = `${genres[index]}-title`;

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

    await renderPosters(listOfMovies, genres[index]);
  };
};
createMovieSections();