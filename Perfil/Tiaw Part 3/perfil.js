const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Escolher uma imagem";
const img = document.createElement("img");
let atual;
let users = JSON.parse(localStorage.listaUser)
for (let i = 0; i < users.length; i++) {
  if (users[i].userCad == JSON.parse(localStorage.userLogado).user || users[i].userCad == JSON.parse(localStorage.userLogado).userCad) {
    atual = i;
  }
}
function updateImg(){
      img.classList.add("picture__img");
      pictureImage.innerHTML = null;
      pictureImage.appendChild(img);
      img.src = users[atual].imagem
}
if(img.src==undefined){
pictureImage.innerHTML = pictureImageTxt;
}
var username = document.getElementById("username");
let nome = JSON.parse(localStorage.userLogado).nome;
if(nome==undefined){
  let teste = JSON.parse(localStorage.userLogado)
  teste.nome = teste.nomeCad
  localStorage.userLogado = JSON.stringify(teste)
}
username.innerHTML = JSON.parse(localStorage.userLogado).nome

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;
      img.src = readerTarget.result;
      users[atual].imagem = img.src;
      localStorage.listaUser= JSON.stringify(users)
      img.classList.add("picture__img");
      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });
    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});
function showMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
  menu.classList.toggle('visible');

  var userLogado = localStorage.getItem("userLogado");
  if (userLogado) {
    var userData = JSON.parse(userLogado);
    username.textContent = userData.nome;
  }
}

function editName() {
  let input = document.getElementById('novoNome')
  input.classList.toggle('none')
  if(input.className.includes('none')){
  if (input.value !== null && input.value !== "") {
    var userLogado = localStorage.getItem("userLogado");
    if (userLogado) {
      var userData = JSON.parse(userLogado);
      userData.nome = input.value;
      localStorage.userLogado = JSON.stringify(userData);
      var username = document.getElementById("username");
      username.textContent = input.value;
      users[atual]= JSON.parse(localStorage.userLogado);
      localStorage.listaUser = JSON.stringify(users);
      console.log("Nome atualizado: " + input.value);
    }
  }
  input.value = ''
}
}
updateImg()


// Simulando a criação do objeto userValid e salvando-o no localStorage