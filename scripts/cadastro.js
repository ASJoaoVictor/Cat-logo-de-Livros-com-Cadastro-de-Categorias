const categorias = [
    "romance",
    "aventura",
    "ação"
];

const buttonCadastrarLivro = document.getElementById("button-cadastrar-livro");
const buttonCadastrarCategoria = document.getElementById("button-cadastrar-categoria");
const buttonListarCategorias = document.getElementById("button-listar-categorias")
const buttonListarLivros = document.getElementById("button-listar-livros")

const formLivro = document.getElementById("form-livro");
const formCategoria = document.getElementById("form-categoria");
const listaCategorias = document.getElementById("lista-categorias");
const listaLivros = document.getElementById("lista-livros");

const selectCategoriaLivro = document.getElementById("select-categoria-livro");

formCategoria.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeCategoria = document.getElementById("nome-categoria").value.toLowerCase(); 

    if(categorias.find(c => c === nomeCategoria)){
        alert("Categoria já existe");
    }else{
        categorias.push(nomeCategoria);
        console.log(categorias);
    }

    formCategoria.reset();
});


//Funções dos botões do menu
buttonCadastrarLivro.addEventListener("click", (e) => {
    e.preventDefault();

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

    listaCategorias.innerHTML = "";
    listaCategorias.innerHTML += "<h2>Lista de Categorias</h2>"
    for (let index = 0; index < categorias.length; index++) {
        listaCategorias.innerHTML += "<p>" + categorias[index] + "</p>"
        
    }

});

buttonListarLivros.addEventListener("click", (e) => {
    e.preventDefault();

    buttonListarLivros.classList = "ativo";
    buttonListarCategorias.classList = "desativo";
    buttonCadastrarLivro.classList = "desativo";
    buttonCadastrarCategoria.classList =  "desativo";

    listaLivros.style.display = "";
    listaCategorias.style.display = "none";
    formLivro.style.display = "none";
    formCategoria.style.display = "none";
});

buttonCadastrarLivro.click();
