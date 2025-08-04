const users = [{"username": "admin", "password": "12345"}];

const loginForm = document.getElementById("login-form");

const regexUsername = /^[a-z]+$/;

if(localStorage.getItem("user") && users.find(u => u.username == localStorage.getItem("user"))){
    window.location.href = "cadastro.html";
}

function logar(){
    return new Promise((resolve, reject) => setTimeout(resolve, 1000));
}


//Função verificar o login do usuário
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = document.getElementById("message");

    logar()
        .then(() => {
            const username = document.getElementById("login-username").value.trim();
            const password = document.getElementById("login-password").value.trim();

            if(username == "" || !regexUsername.test(username)){
                throw new Error("Usuário inválido");
                
            }else if(password == ""){
                throw new Error("Senha inválida!");
            }

            if(users.find(u => u.username == username && u.password == password)){
                localStorage.setItem("user", username);
                window.location.href = "cadastro.html";
            }else{
                throw new Error("Usuário ou senha incorretos!");
            }

    })
    .catch(err => {
        message.style.color = "red";
        message.innerText = err.message;
    })
    .finally(() => loginForm.reset());


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

    if(regexUsername.test(this.value)){
        this.style.outlineColor = "rgb(0, 250, 0)";
    }else{
        this.style.outlineColor = "red";
    }
});


