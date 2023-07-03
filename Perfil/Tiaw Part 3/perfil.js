const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;
inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];
  if (file) {
    const reader = new FileReader();
    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;
      const img = document.createElement("img");
      img.src = readerTarget.result;
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
    var username = document.getElementById("username");
    username.textContent = "Nome de usuário: " + userData.username;
  }
}

function editName() {
  var newName = prompt("Digite o novo nome:");
  if (newName !== null && newName.trim() !== "") {
    var userLogado = localStorage.getItem("userLogado");
    if (userLogado) {
      var userData = JSON.parse(userLogado);
      userData.username = newName;
      localStorage.setItem("userLogado", JSON.stringify(userData));
      var username = document.getElementById("username");
      username.textContent = "Nome de usuário: " + newName;
      console.log("Nome atualizado: " + newName);
    }
  }
}

// Simulando a criação do objeto userValid e salvando-o no localStorage
var userValid = {
  username: "Nome de Usuário Padrão"
};
localStorage.setItem("userLogado", JSON.stringify(userValid));