


/*Usuarios*/


const infoU = document.getElementById("infoU")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const infosa = document.getElementById("info-sa")
const ingresarContainer = document.getElementById("ingresarContainer")
const btnIngresar = document.getElementById("btnIngresar")
const cardIngresar = document.getElementById("cardIngresar")
const cardRetirar = document.getElementById("cardRetirar")
const cardConsulta = document.getElementById("cardConsulta")
const btnRetirar = document.getElementById("btnRetirar")
const btnConsulta = document.getElementById("btnConsulta")

/*mensaje al inicio de la pag para cada usuario y su contarseña en localStorage*/

let userNameU = localStorage.getItem("userName")
let userPasswordU = localStorage.getItem("userPassword")
infoU.innerHTML = `Hola ${userNameU}`


/*Función de Botones*/

btn2.addEventListener("click", (event) => {
    event.preventDefault()
    window.location = "index.html"
})

btn3.addEventListener("click", (event) => {
    event.preventDefault()
    cardConsulta.style.display = "block"
})

btnConsulta.addEventListener("click", (eventC) => {
    eventC.preventDefault()

    let passConsulta = document.getElementById("passConsulta").value

    for (i = 0; i < users.length; i++) {
        if (passConsulta == users[i].contraseña && userPasswordU == passConsulta) {
            console.log(users[i].saldo)
            infosa.innerHTML = infosa.innerHTML + `<p> Su saldo es ${users[i].saldo}</p>`;
            cardConsulta.style.display = "none"
        }
    }
})



btn4.addEventListener("click", (eventIV) => {
    eventIV.preventDefault()
    cardIngresar.style.display = "block"
})

console.log("toi afuero de ingresar")
btnIngresar.addEventListener("click", (eventI) => {

    let dineroIngresado, passIngresar

    dineroIngresado = document.getElementById("dineroIngresado").value
    passIngresar = document.getElementById("passIngresar").value

    eventI.preventDefault()
    console.log("ingresee")
    console.log(dineroIngresado)
    const v1 = parseInt(dineroIngresado)
    for (i = 0; i < users.length; i++) {
        if (passIngresar == users[i].contraseña) {
            const saldoFinalI = (users[i].saldo + v1);
            users[i].saldo = saldoFinalI
            console.log(saldoFinalI)
            cardIngresar.style.display = "none"

        }
    }
})

btn5.addEventListener("click", (event) => {
    event.preventDefault()
    cardRetirar.style.display = "block"
})

btnRetirar.addEventListener("click", (eventR) => {
    console.log("toi dentro de reirar jiji")
    let dineroRetirado, passRetirar

    dineroRetirado = document.getElementById("dineroRetirado").value
    passRetirar = document.getElementById("passRetirar").value

    eventR.preventDefault()
    console.log("ingreseeretirarfunction")
    console.log(dineroRetirado)
    for (i = 0; i < users.length; i++) {
        if (passRetirar == users[i].contraseña) {
            const saldoFinalR = users[i].saldo - dineroRetirado;
            users[i].saldo = saldoFinalR
            console.log(saldoFinalR)
            cardRetirar.style.display = "none"

        }
    }
})
