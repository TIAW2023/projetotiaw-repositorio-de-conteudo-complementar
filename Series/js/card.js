const url = new URL(window.location);

function openCard(posição) {
  url.searchParams.set("pos", posição);
  history.pushState({}, "", url);
  let parametros = new URLSearchParams(url.search);
  document.getElementById("cardbox").style.display = "flex";
  document.getElementById(
    "filme_img"
  ).src = `https://image.tmdb.org/t/p/original/${filmes[posição].poster_path}`;
  document.querySelector(
    ".card span h1"
  ).innerHTML = `${filmes[posição].name}`;
  document.querySelector(".card span p").innerHTML = `${filmes[
    posição
  ].first_air_date.substring(0, 4)}`;
  document.querySelector(
    ".card span p:nth-child(3)"
  ).innerHTML = `${filmes[posição].overview}`;
  let barra = document.querySelector(".medidor"),
    valorBarra = document.querySelector(".valor_barra");
  valorBarra.textContent = `${Math.ceil(filmes[posição].vote_average * 10)}%`;
  barra.style.background = `conic-gradient(#21d07a ${Math.ceil(filmes[posição].vote_average * 10) * 3.6
    }deg,#204529 0deg)`;
  if (JSON.parse(localStorage.userLogado).favs) {
    if (JSON.stringify(JSON.parse(localStorage.userLogado).favs).includes(JSON.stringify(filmes[parametros.get("pos")]))) {
      bookmark.classList.add("fa-solid");
      bookmark.classList.remove("fa-regular");
    } else {
      bookmark.classList.remove("fa-solid");
      bookmark.classList.add("fa-regular");
    }
  }
}
document
  .getElementById("close_card")
  .addEventListener("click", function closeCard() {
    document.getElementById("cardbox").style.display = "none";
    url.searchParams.delete("pos");
    history.pushState({}, "", url);
  });