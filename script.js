const contato=document.querySelector(".contato")
const formulario=document.querySelector("form")
const container=document.querySelector(".container")

const aparecerTela=()=> {
    formulario.style.opacity=1
    container.style.opacity=0.2
}

const voltarTela=()=> {
    formulario.style.opacity=0
    container.style.opacity=1

}

contato.addEventListener("click",aparecerTela)