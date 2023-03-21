
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
const btnRetirar = document.getElementById("btnRetirar")
const btnConsulta = document.getElementById("btnConsulta")

/*mensaje al inicio de la pag para cada usuario y su contarseña en localStorage*/

let userNameU = localStorage.getItem("userName")
let userPasswordU = localStorage.getItem("userPassword")

    userNameU = userNameU.replace('"',""); 
    userNameU = userNameU.replace('"',"");
    userPasswordU = userPasswordU.replace('"',"");
    userPasswordU = userPasswordU.replace('"',"");
infoU.innerHTML =`Hola ${userNameU}`

/*Función de Botones*/

btn2.addEventListener("click", (event) => {
    event.preventDefault()
    window.location = "index.html"
})
btn3.addEventListener("click", (event) => {
    event.preventDefault()
    for (i = 0; i < users.length; i++) {
        if (userNameU == users[i].nombre && userPasswordU == users[i].contraseña) {
            console.log("jijij")
            console.log(users[i].saldo)
            infosa.innerHTML = infosa.innerHTML + `<p> Su saldo es $${users[i].saldo}</p>`;
        }
    }
})


btn4.addEventListener("click", (eventIV) => {
    eventIV.preventDefault()
    cardIngresar.style.display = "block"
})

console.log("toi afuero de ingresar function")
btnIngresar.addEventListener("click", (eventI) => {

    let dineroIngresado

    dineroIngresado = document.getElementById("dineroIngresado").value

    eventI.preventDefault()
    console.log("ingrese a ingresar function")
    console.log(dineroIngresado)
    const v1 = parseInt(dineroIngresado)
    for (i = 0; i < users.length; i++) {
        if (users[i].contraseña == userPasswordU) {
            const saldoFinalI = (users[i].saldo + v1);
            users[i].saldo = saldoFinalI
            console.log(saldoFinalI)
            if(users[i].saldo > 10 && users[i].saldo < 990 ){

                infosa.innerHTML = infosa.innerHTML + `<p> Ha añadido $${v1} a su cuenta, su nuevo saldo es $${users[i].saldo}</p>`;
                cardIngresar.style.display = "none"
            }else{
                alert("Su cuenta no puede exceder el limite de saldo($990), ni tener menos del minimo($10)")
                users[i].saldo = saldoFinalI - v1
            }

        }
    }
})

btn5.addEventListener("click", (event) => {
    event.preventDefault()
    cardRetirar.style.display = "block"
})

btnRetirar.addEventListener("click", (eventR) => {
    console.log("toi dentro de reirar jiji")
    let dineroRetirado

    dineroRetirado = document.getElementById("dineroRetirado").value
    

    eventR.preventDefault()
    console.log("ingrese a retirar function")
    console.log(dineroRetirado)
    const v2 = parseInt(dineroRetirado)
    for (i = 0; i < users.length; i++) {
        if (users[i].contraseña == userPasswordU) {
            const saldoFinalI = (users[i].saldo - v2);
            users[i].saldo = saldoFinalI
            console.log(saldoFinalI)
            if(users[i].saldo > 10 && users[i].saldo < 990 ){

                infosa.innerHTML = infosa.innerHTML + `<p> Ha retirado $${v2} de su cuenta, su nuevo saldo es $${users[i].saldo}</p>`;
                cardRetirar.style.display = "none"
               
            }else{
                alert("Su cuenta no puede exceder el limite de saldo($990), ni tener menos del minimo($10)")
                users[i].saldo = saldoFinalI + v2
            }

        }
    }
})
