let atual;
let users = JSON.parse(localStorage.listaUser)
for (let i = 0; i < users.length; i++) {
  if (users[i].userCad == JSON.parse(localStorage.userLogado).user || users[i].userCad == JSON.parse(localStorage.userLogado).userCad) {
    atual = i;
  }
}
let bookmark = document.getElementsByClassName("fa-bookmark")[0];
let favs = [];
let user;
localStorage.userLogado = JSON.stringify(users[atual]);
bookmark.addEventListener("click", function () {
  let parametros = new URLSearchParams(window.location.search);

  if (bookmark.classList.contains("fa-regular")) {
    user = JSON.parse(localStorage.getItem("listaUser"));
    user[atual].favs = []
    if (JSON.parse(localStorage.getItem("listaUser"))[atual].favs) {
      user[atual].favs = JSON.parse(localStorage.getItem("listaUser"))[atual].favs
    }
    let novoFav = filmes[parametros.get("pos")];
    user[atual].favs.push(novoFav);
    localStorage.listaUser = JSON.stringify(user);
    bookmark.classList.add("fa-solid");
    bookmark.classList.remove("fa-regular");
  } else {
    user = JSON.parse(localStorage.getItem("listaUser"));
    for (let i = 0; i < user[atual].favs.length; i++) {
      if (filmes[parametros.get("pos")].imdb_id == user[atual].favs[i].imdb_id) {
        user[atual].favs.splice(i, 1);
        localStorage.listaUser = JSON.stringify(user);
      }
    }
    if (JSON.parse(localStorage.listaUser)[atual].favs[0] == undefined) {
      user = JSON.parse(localStorage.getItem("listaUser"));
      delete user[atual].favs
      localStorage.listaUser = JSON.stringify(user)
    }
    bookmark.classList.remove("fa-solid");
    bookmark.classList.add("fa-regular");
  }
  localStorage.userLogado = JSON.stringify(JSON.parse(localStorage.listaUser)[atual]);
}
);