console.log("hola")

const users = [
    {nombre: 'Andro', saldo: 770 , contraseña: 'perroespia', pag:"http://127.0.0.1:5500/nuevoMandroEstado/index2.html"},
    {nombre: 'Manzana', saldo: 340, contraseña: 'jebs', pag:"http://127.0.0.1:5500/nuevoMandroEstado/index3.html"},
    {nombre: 'Vergil', saldo: 203 , contraseña: 'motivated', pag: "http://127.0.0.1:5500/nuevoMandroEstado/index4.html"},
]

localStorage.setItem("usersLocal", JSON.stringify(users));

const btn = document.getElementById("btn")

console.log("holiiii")



btn.addEventListener("click", (event) => {
    console.log("holiuwuwuw")

    event.preventDefault()

    let user, password
    user = document.getElementById("user").value
    password = document.getElementById("password").value
    
    localStorage.setItem("userName", JSON.stringify(user));
    localStorage.setItem("userPassword", JSON.stringify(password));

    console.log("hola buenas")

    for(i = 0; i <  users.length; i++ ){
        console.log("entrando al for")
       
        if(user == users[i].nombre && password == users[i].contraseña){
            alert("Iniciaste Sesión!")
            window.location=users[i].pag
        }
    }
})
