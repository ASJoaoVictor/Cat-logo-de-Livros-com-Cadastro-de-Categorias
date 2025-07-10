const users = [{"username": "admin", "password": "1234"}];

const loginForm = document.getElementById("login-form");

if(localStorage.getItem("user") && users.find(u => u.username == localStorage.getItem("user"))){
    window.location.href = "cadastro.html";
}


//Função verificar o login do usuário
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const message = document.getElementById("message");

    if(username == ""){
        alert("Usuário inválido!")
        return;
    }else if(password == ""){
        alert("Senha inváli!a")
        return;
    }

    if(users.find(u => u.username == username && u.password == password)){
        localStorage.setItem("user", username);
        window.location.href = "cadastro.html";
    }else{
        message.style.color = "red";
        message.innerText = "Usuário ou senha incorretos!"
    }

    loginForm.reset();
});

document.getElementById("login-password").addEventListener("input", function() {
    const pwd = this.value;
    
    red = 255;
    green = 0;
    for(let i = pwd.length; i >= 0; i--){
        this.style.outlineColor = "rgb("+ red +"," + green + ", 0)";
        red -= 50;
        green += 50;
    } 
});

document.getElementById("login-username").addEventListener("input", function() {
    const regex = /^[a-z]+$/;

    if(regex.test(this.value)){
        this.style.outlineColor = "green";
        this.style.borderColor = "green";
    }else{
        this.style.outlineColor = "red";
    }
});


