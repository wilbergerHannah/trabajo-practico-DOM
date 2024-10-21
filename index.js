let titulo = document.querySelector ('#Trabajo practico DOM II')
let parrafo = document.querySelector ('#conversación')
let boton = document.querySelector ('#boton1')
let frase = document.querySelector ('#frase')


let parrafo2 = document.querySelector ('#conversación2')
let boton2 = document.querySelector ('#boton2')
let frase2 = document.querySelector ('#frase2')


boton.onclick = function () {


if (frase.value == '¿Cómo estás?') {
parrafo.textContent = 'Bien y vos?'
} else {
    parrafo.textContent = 'No entiendo la pregunta'
}


}


let listaAlumnos = []


boton2.onclick = function () {


    listaAlumnos.push (' ' + frase2.value)
parrafo2.textContent = listaAlumnos


}


