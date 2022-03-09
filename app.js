const aC = document.getElementById("ac")
const del = document.getElementById("del")
const divi = document.getElementById("divi")
const siete = document.getElementById("siete")
const ocho = document.getElementById("ocho")
const nueve = document.getElementById("nueve")
const por = document.getElementById("por")
const cuatro = document.getElementById("cuatro")
const cinco = document.getElementById("cinco")
const seis = document.getElementById("seis")
const mas = document.getElementById("mas")
const uno = document.getElementById("uno")
const dos = document.getElementById("dos")
const tres = document.getElementById("tres")
const menos = document.getElementById("menos")
const deci = document.getElementById("deci")
const cero = document.getElementById("cero")
const igual = document.getElementById("igual")

const previo = document.getElementById("previo")
const actual = document.getElementById("actual")

let operator = ""
let num1 = ""
let num2 = ""



function clickNumero(val){
    if (operator===""){
        num1 = num1 + val
    }else{
        num2 = num2 + val
    }
}