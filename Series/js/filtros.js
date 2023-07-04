let campoPesquisa = document.getElementById("pesquisar");
function filtrarCategorias(categoria) {
  let FilmesDiv = document.querySelectorAll(".filme");
  let nãoEncontrado = document.querySelector(".nenc");
  let cont = 0;
  if (categoria == "Todos") {
    for (let filme of FilmesDiv) {
      filme.classList.remove("hide");
    }
  } else {
    for (let filme of FilmesDiv) {
      if (!filme.className.includes(categoria)) {
        cont++;
        filme.classList.add("hide");
      } else {
        filme.classList.remove("hide");
      }
    }
  }

  if (cont == FilmesDiv.length) {
    nãoEncontrado.classList.remove("hide");
    document.querySelector(".row").classList.add("hide");
  } else if (
    cont < FilmesDiv.length &&
    !nãoEncontrado.className.includes("hide")
  ) {
    nãoEncontrado.classList.add("hide");
    document.querySelector(".row").classList.remove("hide");
  }
}
campoPesquisa.addEventListener("input", function () {
  let cont = 0;
  let valor = campoPesquisa.value;
  let FilmesDiv = document.querySelectorAll(".filme");
  let nãoEncontrado = document.querySelector(".nenc");
  let botão = document.getElementById("botão_pesquisa");
  if (valor) {
    campoPesquisa.addEventListener("keyup", function (e) {
      let key = e.which || e.keyCode;
      if (key == 13) {
        for (let filme of FilmesDiv) {
          let titulo = filme.querySelector(".filme h2");
          titulo = titulo.textContent.toLowerCase();
          let filterText = campoPesquisa.value.toLowerCase();
          if (!titulo.includes(filterText)) {
            cont++;
            filme.classList.add("hide");
          } else {
            filme.classList.remove("hide");
          }
        }
        if (cont == FilmesDiv.length) {
          nãoEncontrado.classList.remove("hide");
          document.querySelector(".row").classList.add("hide");
        } else if (
          cont < FilmesDiv.length &&
          !nãoEncontrado.className.includes("hide")
        ) {
          nãoEncontrado.classList.add("hide");
          document.querySelector(".row").classList.remove("hide");
        }
      }
    });
    botão.addEventListener("click", function () {
      for (let filme of FilmesDiv) {
        let titulo = filme.querySelector(".filme h2");
        titulo = titulo.textContent.toLowerCase();
        let filterText = campoPesquisa.value.toLowerCase();
        if (!titulo.includes(filterText)) {
          cont++;
          filme.classList.add("hide");
        } else {
          filme.classList.remove("hide");
        }
      }
      if (cont == FilmesDiv.length) {
        nãoEncontrado.classList.remove("hide");
        document.querySelector(".row").classList.add("hide");
      } else if (
        cont < FilmesDiv.length &&
        !nãoEncontrado.className.includes("hide")
      ) {
        nãoEncontrado.classList.add("hide");
        document.querySelector(".row").classList.remove("hide");
      }
    });
  } else {
    for (let filme of FilmesDiv) {
      nãoEncontrado.classList.add("hide");
      document.querySelector(".row").classList.remove("hide");
      cont = 0;
      filme.classList.remove("hide");
    }
  }
});