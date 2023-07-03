let atual;
let users = JSON.parse(localStorage.listaUser)
for (let i = 0; i < users.length; i++) {
  if (users[i].userCad == JSON.parse(localStorage.userLogado).user || users[i].userCad == JSON.parse(localStorage.userLogado).userCad) {
    atual = i;
  }
}
let user;
localStorage.userLogado = JSON.stringify(users[atual]);