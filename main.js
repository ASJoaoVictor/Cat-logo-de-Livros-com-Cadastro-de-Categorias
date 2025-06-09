const users = [{"username": "victor", "password": "1234"}];

const loginForm = document.getElementById("login-form");



loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const message = document.getElementById("message");

    if(users.find(u => u.username == username && u.password == password)){
        alert("Login feito")
        window.location.href = "cadastroLivro.html"
    }else{
        message.style.color = "red";
        message.innerText = "Usuário ou senha incorretos!"
    }

    loginForm.reset();

});