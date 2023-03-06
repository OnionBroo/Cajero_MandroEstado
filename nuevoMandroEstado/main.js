const btn = document.getElementById("btn")

btn.addEventListener("click", (event)=>{
    event.preventDefault()
    let user, password
    user = document.getElementById("user").value
    password = document.getElementById("password").value
    
    if(user == "Mandro123" && password == "1234"){
        window.location="index2.html";
        alert("iniciaste sesión")
    }else{
        alert("tamal")
    }
    if(user == "ManzanaPro" && password == "1234"){
        window.location="index2.html";
        alert("iniciaste sesión")
    }else{
        alert("tamal")
    }
    if(user == "xXLautaroXx" && password == "1234"){
        window.location="index2.html";
        alert("iniciaste sesión")
    }else{
        alert("tamal")
    }
})
