let filmes = JSON.parse(localStorage.userLogado).favs;
let divFilmes = document.getElementById('filmes');
let str = '';

if(filmes){
  
for(let i=0;i<filmes.length;i++){
  if(filmes[i].title){
  str+=`<div class="filme col-md-2 col-sm-5" onclick="openCard(${i})">
  <img src="https://image.tmdb.org/t/p/original/${filmes[i].poster_path}" class="img_filme">
  <h2 class="titulo_filme">${filmes[i].title}</h2>
</div>`
}
else{
  str+=`<div class="filme col-md-2 col-sm-5" onclick="openCard(${i})">
  <img src="https://image.tmdb.org/t/p/original/${filmes[i].poster_path}" class="img_filme">
  <h2 class="titulo_filme">${filmes[i].name}</h2>
</div>`
}
}
 
divFilmes.innerHTML = str;
}
else{
  divFilmes.innerHTML = "SEM FAVORITOS"
}


