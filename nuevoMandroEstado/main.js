console.log("hola")

const users = [
    {nombre: "Andro", saldo: 770 , contraseña: "1", pag:"http://127.0.0.1:5500/nuevoMandroEstado/index2.html"},
    {nombre: "Manzana", saldo: 340, contraseña: "12", pag:"http://127.0.0.1:5500/nuevoMandroEstado/index3.html"},
    {nombre: "Vergil", saldo: 203 , contraseña: "123", pag: "http://127.0.0.1:5500/nuevoMandroEstado/index4.html"},
]
const btn = document.getElementById("btn")

console.log("holiiii")

btn.addEventListener("click", (event)=>{
    console.log("holiuwuwuw")

    event.preventDefault()

    let user, password
    user = document.getElementById("user").value
    password = document.getElementById("password").value
    
    console.log("hola buenas")

    for(i = 0; i <  users.length; i++ ){
        console.log("entrando al for")
       
        if(user == users[i].nombre && password == users[i].contraseña){
            alert("Iniciaste Sesión!")
            window.location=users[i].pag
        }
    }
})
