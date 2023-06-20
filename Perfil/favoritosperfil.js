let bookmark = document.getElementsByClassName("fa-bookmark")[0];
let favs = [];
bookmark.addEventListener("click", function () {
  let parametros = new URLSearchParams(window.location.search);

  if (bookmark.classList.contains("fa-regular")) {
    if (localStorage.favs) {
      favs = JSON.parse(localStorage.getItem("favs"));
    }
    let novoFav = filmes[parametros.get("pos")];
    favs.push(novoFav);
    localStorage.favs = JSON.stringify(favs);
    bookmark.classList.add("fa-solid");
    bookmark.classList.remove("fa-regular");
  } else {
    favs = JSON.parse(localStorage.getItem("favs"));
    for (let i = 0; i < favs.length; i++) {
      if (filmes[parametros.get("pos")].imdb_id == favs[i].imdb_id) {
        favs.splice(i, 1);
        localStorage.favs = JSON.stringify(favs);
      }
    }
    if (localStorage.getItem("favs") == "[]") {
      localStorage.removeItem("favs");
    }
    bookmark.classList.remove("fa-solid");
    bookmark.classList.add("fa-regular");
  }
});