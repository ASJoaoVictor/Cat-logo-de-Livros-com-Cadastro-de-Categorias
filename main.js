const users = [{"username": "victor", "password": "1234"}];

const loginForm = document.getElementById("login-form");



addEventListener("submit", () => {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if(users.find(u => u.username == username && u.password == password)){
        alert("Login feito")
    }else{
        alert("Usuário ou senha incorretos!")
    }
});