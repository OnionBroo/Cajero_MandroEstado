console.log("hola")
const users = [
    {nombre: "Andro", saldo: 770 , contraseña: "1"},
    {nombre: "Manzana", saldo: 340, contraseña: "12"},
    {nombre: "Vergil", saldo: 203 , contraseña: "123"},
]
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const infosa = document.getElementById("info-sa")

btn2.addEventListener("click", (event)=>{
    event.preventDefault()
    window.location = "index.html"
})
btn3.addEventListener("click", (event)=>{
    event.preventDefault()
    let pass = prompt("Ingrese su contraseña por favor");
    for(i = 0; i < users.length; i++){
        if(pass == users[i].contraseña){
            console.log(users[i].saldo)
            infosa.innerHTML = infosa.innerHTML + `<p> Su saldo es ${users[i].saldo}</p>`;
        }
    }
})
btn4.addEventListener("click", (event)=>{
    event.preventDefault()
    
})
btn5.addEventListener("click", (event)=>{
    event.preventDefault()
    
})
