let carretDown = document.getElementsByClassName("carret-down")[0]
carretDown.addEventListener("click",function(){
    let filtros = document.getElementsByClassName("filtros")[0]
    filtros.classList.toggle("altura")
    let filtrosUl = filtros.getElementsByClassName("ulFiltros")[0]
    console.log(filtrosUl)
    filtrosUl.classList.toggle("altura")
})