const aC = document.getElementById("ac")
const dele = document.getElementById("del")

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
        actual.textContent = num1
    }else{
        num2 = num2 + val
        actual.textContent = num2
    }
}

function clickOperador(val){
    operator = val
    actual.textContent = ""
    previo.textContent = num1 + operator
}

function borraTodo(){
    actual.textContent = ""
    previo.textContent = ""
    operator = ""
    num1 = ""
    num2 = ""
}

function result(){
    if(operator==="+"){
        actual.textContent = (Number(num1) + Number(num2));
        previo.textContent = (Number(num1) + "+" +  Number(num2))
    }else if(operator==="-"){
        actual.textContent = (Number(num1) - Number(num2));
        previo.textContent = (Number(num1) + "-" +  Number(num2))
    }else if(operator==="*"){
        actual.textContent = (Number(num1) * Number(num2));
        previo.textContent = (Number(num1) + "*" +  Number(num2))
    }else if(operator==="/"){
        actual.textContent = (Number(num1) / Number(num2));
        previo.textContent = (Number(num1) + "/" +  Number(num2))
    }
    // switch (operator) {
    //     case "+":actual.textContent = (Number(num1) + Number(num2)); 
    //     break
    //     case "-":actual.textContent = (Number(num1) - Number(num2));
    //     break
    //     case "*":actual.textContent = (Number(num1) * Number(num2));
        
    //     break
    //     case "/":{actual.textContent = (Number(num1) / Number(num2)); 
        
    //     break
    // }
}
function del(){
    if (!operator){
        num1 = ""
        actual.textContent = ""
    }else if(operator && actual.textContent===""){
        operator = ""
        num1 = ""
        previo.textContent = ""
    }else{
        num2 = ""
        actual.textContent = ""
    }
}


mas.addEventListener("click", ()=>{
    clickOperador("+")
})
menos.addEventListener("click", ()=>{
    clickOperador("-")
})
divi.addEventListener("click", ()=>{
    clickOperador("/")
})
por.addEventListener("click", ()=>{
    clickOperador("*")
})

cero.addEventListener("click", ()=>{
    clickNumero(0)
})
uno.addEventListener("click", ()=>{
    clickNumero(1)
})
dos.addEventListener("click", ()=>{
    clickNumero(2)
})
tres.addEventListener("click", ()=>{
    clickNumero(3)
})
cuatro.addEventListener("click", ()=>{
    clickNumero(4)
})
cinco.addEventListener("click", ()=>{
    clickNumero(5)
})
seis.addEventListener("click", ()=>{
    clickNumero(6)
})
siete.addEventListener("click", ()=>{
    clickNumero(7)
})
ocho.addEventListener("click", ()=>{
    clickNumero(8)
})
nueve.addEventListener("click", ()=>{
    clickNumero(9)
})

aC.addEventListener("click", ()=>{
    borraTodo()
})

deci.addEventListener("click", ()=>{
    clickNumero(".")
})

igual.addEventListener("click", ()=>{
    result()
})

dele.addEventListener("click", ()=>{
    del()
})