var categorias = [
    "romance",
    "aventura",
    "ação"
];

var livros = [
    // Categoria: Romance
    {
        "titulo": "Orgulho e Preconceito",
        "autor": "Jane Austen",
        "categoria": "romance"
    },
    {
        "titulo": "Cem Anos de Solidão",
        "autor": "Gabriel García Márquez",
        "categoria": "romance"
    },
    {
        "titulo": "O Morro dos Ventos Uivantes",
        "autor": "Emily Brontë",
        "categoria": "romance"
    },
    {
        "titulo": "Anna Kariênina",
        "autor": "Lev Tolstói",
        "categoria": "romance"
    },
    {
        "titulo": "A Culpa é das Estrelas",
        "autor": "John Green",
        "categoria": "romance"
    },

    // Categoria: Aventura
    {
        "titulo": "A Ilha do Tesouro",
        "autor": "Robert Louis Stevenson",
        "categoria": "aventura"
    },
    {
        "titulo": "As Aventuras de Tom Sawyer",
        "autor": "Mark Twain",
        "categoria": "aventura"
    },
    {
        "titulo": "Viagem ao Centro da Terra",
        "autor": "Jules Verne",
        "categoria": "aventura"
    },
    {
        "titulo": "O Hobbit",
        "autor": "J.R.R. Tolkien",
        "categoria": "aventura"
    },
    {
        "titulo": "Robinson Crusoé",
        "autor": "Daniel Defoe",
        "categoria": "aventura"
    },

    // Categoria: Ação
    {
        "titulo": "O Código Da Vinci",
        "autor": "Dan Brown",
        "categoria": "ação"
    },
    {
        "titulo": "Jogos Vorazes",
        "autor": "Suzanne Collins",
        "categoria": "ação"
    },
    {
        "titulo": "O Último dos Moicanos",
        "autor": "James Fenimore Cooper",
        "categoria": "ação"
    },
    {
        "titulo": "A Guerra dos Tronos",
        "autor": "George R.R. Martin",
        "categoria": "ação"
    },
    {
        "titulo": "Divergente",
        "autor": "Veronica Roth",
        "categoria": "ação"
    }
];

checkLocalStorage();

//Validando de existe usuário logado
if(!localStorage.getItem("user")){
    window.location.href = "index.html";
}

coods =  [-6.4836, -36.1536];
apikey = "80bd2baeac71821f3635d5a5a1fe855c";
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coods[0]}&lon=${coods[1]}&units=metric&appid=${apikey}&lang=pt_br`)
    .then(res => {
        if(!res.ok) throw new Error(res.status);
        return res.json();
    })
    .then(dados => document.getElementById("temp").innerHTML = `<p>Cidade: ${dados.name}</p> <p>Temp: ${dados.main.temp}°C</p> <p> Clima: ${dados.weather[0].description}</p`)
    .catch(err => {
        //Acesso não autorizado
        if(err.message == 401){
            document.getElementById("temp").innerHTML = "Sem <br> conexão";
        }else if(err.message == 404 || err.message == 400){//Não encontrado
            document.getElementById("temp").innerHTML = "Cidade não <br> encontrada";
        }else if(err.message >= 500 && err.message <= 599){//Problema no servidor
            document.getElementById("temp").innerHTML = "Sem <br> serviço";
        }

    });

const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

const buttonCadastrarLivro = document.getElementById("button-cadastrar-livro");
const buttonCadastrarCategoria = document.getElementById("button-cadastrar-categoria");
const buttonListarCategorias = document.getElementById("button-listar-categorias")
const buttonListarLivros = document.getElementById("button-listar-livros")

const formLivro = document.getElementById("form-livro");
const formCategoria = document.getElementById("form-categoria");
const listaCategorias = document.getElementById("lista-categorias");
const listaLivros = document.getElementById("lista-livros");

const selectCategoriaLivro = document.getElementById("select-categoria-livro");

function checkLocalStorage(){
    if(localStorage.getItem("livros")){
        livros = JSON.parse(localStorage.getItem("livros"));
    }

    if(localStorage.getItem("categorias")){
        categorias = JSON.parse(localStorage.getItem("categorias"));
    }
}

//inicio ações das categorias
//Cadastrar categoria
formCategoria.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeCategoria = document.getElementById("nome-categoria").value.toLowerCase(); 

    if(categorias.find(c => c === nomeCategoria)){
        alert("Categoria já existe");
    }else{
        categorias.push(nomeCategoria);
        alert(`Categoria ${nomeCategoria} cadastrada com sucesso!`);
        localStorage.setItem("categorias", JSON.stringify(categorias));
        console.log(categorias);
    }

    formCategoria.reset();
});

//Alterar nome categoria
function editar_categoria(nomeCategoria){

    if(categorias.find(c => c === nomeCategoria)){
        let novoNomeCategoria = prompt("Digite o novo nome para categoria: ");
        if(novoNomeCategoria == null ||  novoNomeCategoria == ""){
            alert("Nome inválido!")
        }else{
            categorias[categorias.indexOf(nomeCategoria)] = novoNomeCategoria;
            localStorage.setItem("categorias", JSON.stringify(categorias));
        }
    }else{
        alert("Categoria não encontrada");
    }

    buttonListarCategorias.click(); 
}


//Delerar categoria
function deletar_categoria(nomeCategoria){
    //const nomeCategoria = document.getElementById("nome-categoria-alt-del").value;

    if(categorias.find(c => c === nomeCategoria)){
        confirmacao = prompt("Digite o nome da categoria para confirmar: ")
        if(nomeCategoria === confirmacao){
            categorias.splice(categorias.indexOf(nomeCategoria), 1);
            localStorage.setItem("categorias", JSON.stringify(categorias));
        }else{
            alert("Nome digitado errado");
            buttonListarCategorias.click();
        }
    }else{
        alert("Categoria não encontrada");
    }

    buttonListarCategorias.click();
}
//Fim ações categorias


//Inicio ações livros
//cadastrar livro
formLivro.addEventListener("submit", (e) => {
    e.preventDefault();

    const tituloLivro = document.getElementById("titulo-livro").value.toLowerCase();
    const autorLivro = document.getElementById("autor-livro").value.toLowerCase();
    const categoriaLivro = document.getElementById("select-categoria-livro").value.toLowerCase();

    if(tituloLivro == ""){
        alert("Título inválido!");
        return;
    }else if(!regex.test(autorLivro) || autorLivro == ""){
        alert("Nome do autor inválido!");
        return;
    }


    if(livros.find(l => l.titulo === tituloLivro && l.autor === autorLivro)) {
        alert("Livro já cadastrado");
    } else {
        livros.push({
            titulo: tituloLivro,
            autor: autorLivro,
            categoria: categoriaLivro
        });
        localStorage.setItem("livros", JSON.stringify(livros));
        alert("Livro cadatrado com sucesso!")
        console.log(livros);
    }

    formLivro.reset();
});

//deletar livro
function deletar_livro(nome_livro){
    const nomeLivro = nome_livro;

    if(livros.find(l => l.titulo === nomeLivro)){
        livros.splice(livros.findIndex(l => l.titulo === nomeLivro), 1);
        localStorage.setItem("livros", JSON.stringify(livros));
        console.log(livros);
    }else{
        alert("Livro não encontrada");
    }

    buttonListarLivros.click();
}

//Editar livro
var nomeLivroEdit;

document.getElementById("form-editar-livro").addEventListener("submit", (e) => {
    e.preventDefault();
    const nomeLivro = nomeLivroEdit;
    
    const novoTitulo = document.getElementById("editar-titulo-livro").value;
    const novoAutor = document.getElementById("editar-autor-livro").value;
    const novoCategoria = document.getElementById("select-editar-categoria-livro").value;

    if(!regex.test(novoAutor) || novoAutor == "" || novoTitulo == ""){
        alert("nome do autor ou título inválido");
        return
    }

    if(livros.find(l => l.titulo === nomeLivro)){
        let indexLivro = livros.findIndex(l => l.titulo == nomeLivro);
    
        livros[indexLivro].titulo = novoTitulo;
        livros[indexLivro].autor = novoAutor;
        livros[indexLivro].categoria = novoCategoria;
    
        localStorage.setItem("livros", JSON.stringify(livros));

        alert("Livro atualizado");
    }

    document.getElementById("form-editar-livro").reset();
    buttonListarLivros.click();

});

function editar_livro(nome_livro){
    nomeLivroEdit = nome_livro;

    document.getElementById("form-editar-livro").style.display = "";

    const selectEditarLivro = document.getElementById("select-editar-categoria-livro");

    selectEditarLivro.innerHTML = "";
    categorias.forEach(categoria => {
        selectEditarLivro.innerHTML += "<option>"+ categoria +"</option>"
    });

}
//Fim ações livros


//Funções dos botões do menu
buttonCadastrarLivro.addEventListener("click", (e) => {
    e.preventDefault();

    checkLocalStorage();

    buttonCadastrarLivro.classList = "ativo";
    buttonCadastrarCategoria.classList =  "desativo";
    buttonListarCategorias.classList = "desativo";
    buttonListarLivros.classList = "desativo";

    formLivro.style.display = "";
    formCategoria.style.display = "none";
    listaCategorias.style.display = "none";
    listaLivros.style.display = "none";

    selectCategoriaLivro.innerHTML = ""
    for (let index = 0; index < categorias.length; index++) {
        selectCategoriaLivro.innerHTML += "<option value="+categorias[index]+">"+categorias[index]+"</option>";
    }

});


buttonCadastrarCategoria.addEventListener("click", (e) => {
    e.preventDefault();

    checkLocalStorage();

    buttonCadastrarCategoria.classList =  "ativo";
    buttonCadastrarLivro.classList = "desativo";
    buttonListarCategorias.classList = "desativo";
    buttonListarLivros.classList = "desativo";

    formCategoria.style.display = "";
    listaCategorias.style.display = "none";
    formLivro.style.display = "none";
    listaLivros.style.display = "none";
});

buttonListarCategorias.addEventListener("click", () => {

    buttonListarCategorias.classList = "ativo";
    buttonCadastrarLivro.classList = "desativo";
    buttonCadastrarCategoria.classList =  "desativo";
    buttonListarLivros.classList = "desativo";

    listaCategorias.style.display = "";
    formLivro.style.display = "none";
    formCategoria.style.display = "none";
    listaLivros.style.display = "none";

    const categoriasCadastradas = document.getElementById("categorias-cadastradas");


    categoriasCadastradas.innerHTML = "";
    for (let index = 0; index < categorias.length; index++) {
        categoriasCadastradas.innerHTML += `
            <tr>
                <th> ${categorias[index]} </th>
                <th class="th_button">
                    <button class="button_edit" onclick="editar_categoria('${categorias[index]}')">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                </th>
                <th class="th_button">
                    <button class="button_del" onclick="deletar_categoria('${categorias[index]}')">
                        <i class="fa-solid fa-delete-left"></i>
                    </button>
                </th>
            </tr>`
        
    }

});

buttonListarLivros.addEventListener("click", (e) => {
    e.preventDefault();

    checkLocalStorage();

    buttonListarLivros.classList = "ativo";
    buttonListarCategorias.classList = "desativo";
    buttonCadastrarLivro.classList = "desativo";
    buttonCadastrarCategoria.classList =  "desativo";

    listaLivros.style.display = "";
    listaCategorias.style.display = "none";
    formLivro.style.display = "none";
    formCategoria.style.display = "none";

    document.getElementById("form-editar-livro").style.display = "none";

    const filtroLivro = document.getElementById("select-filtro-livro");
    const livrosCadastrados = document.getElementById("livros-cadastrados");

    livrosCadastrados.innerHTML = "";
    livrosCadastrados.innerHTML = "<h2>Lista de livros</h2>";
    livrosCadastrados.innerHTML = "<tr><th>Título</th><th>Autor</th><th>Categoria</th></tr>";

    if(filtroLivro.value == "Todos"){
        for (let index = 0; index < livros.length; index++) {
            livrosCadastrados.innerHTML += `
                <tr>
                    <th> ${livros[index].titulo} </th>
                    <th> ${livros[index].autor} </th>
                    <th> ${livros[index].categoria} </th> 
                    <th class="th_button"><button class="button_edit" onclick="editar_livro('${livros[index].titulo}')"><i class="fa-solid fa-pen-to-square"></i></button></th> 
                    <th class="th_button"><button class="button_del" onclick="deletar_livro('${livros[index].titulo}')"><i class="fa-solid fa-delete-left"></i></button></th> 
                </tr>`;
        }
    }else{
        for (let index = 0; index < livros.length; index++) {
            if(livros[index].categoria == filtroLivro.value){
            livrosCadastrados.innerHTML += `
                <tr>
                    <th> ${livros[index].titulo}</th>
                    <th> ${livros[index].autor} </th>
                    <th> ${livros[index].categoria} </th> 
                    <th class="th_button" ><button class="button_edit" onclick="editar_livro('${livros[index].titulo}')"><i class="fa-solid fa-pen-to-square"></i></button></th> 
                    <th class="th_button"><button class="button_del" onclick="deletar_livro('${livros[index].titulo}')"><i class="fa-solid fa-delete-left"></i></button></th> 
                </tr>`;
            }
        }
    }

    filtroLivro.innerHTML = "";
    filtroLivro.innerHTML = "<option>Todos</option>";
    categorias.forEach(categoria => {
        filtroLivro.innerHTML += "<option>"+categoria+"</option>";
    });


});

document.getElementById("button-filtro-livro").addEventListener("click", () => {
    buttonListarLivros.click();
});

//Validação de dados
document.getElementById("autor-livro").addEventListener("input", function() {
    if(regex.test(this.value)){
        this.style.outlineColor = "rgb(0, 250, 0)";
    }else{
        this.style.outlineColor = "rgb(250, 0, 0)";
    }
});

document.getElementById("nome-categoria").addEventListener("input", function() {
    if(this.value == "" || !regex.test(this.value)){
        this.style.outlineColor = "rgb(250, 0, 0)";
    }else{
        this.style.outlineColor = "rgb(0, 250, 0)";
    }
});

document.getElementById("close-form-editar-livro").addEventListener("click", () => {
    document.getElementById("form-editar-livro").style.display = "none";
});

//logoff
document.getElementById("logoff").addEventListener("click", () =>{
    localStorage.removeItem("user");
    location.reload();
});

buttonCadastrarLivro.click();



