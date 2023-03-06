
function login(){
    let user, password
    user = document.getElementById("user").value
    password = document.getElementById("password").value
    if(user == "Mandro123" && password == "1234"){
        alert("Sesión iniciada")
    } else{
        alert("Datos Incorrectos")
    }
}
const json = [{nombre:"Mandro123", saldo:112},
{nombre:"ManzanaPro", saldo:471},
{nombre:"LoLlautaroXx", saldo:750}]