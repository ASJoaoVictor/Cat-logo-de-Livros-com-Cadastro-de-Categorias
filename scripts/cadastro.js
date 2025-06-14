const categorias = [
    "romance",
    "aventura",
    "ação"
];

const buttonCadastrarLivro = document.getElementById("button-cadastrar-livro");
const buttonCadastrarCategoria = document.getElementById("button-cadastrar-categoria");
const buttonListarCategorias = document.getElementById("button-listar-categorias")


const formCategoria = document.getElementById("form-categoria");
const listaCategorias = document.getElementById("lista-categorias");

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

buttonCadastrarLivro.addEventListener("click", (e) => {
    e.preventDefault();
    selectCategoriaLivro.innerHTML = ""
    for (let index = 0; index < categorias.length; index++) {
        selectCategoriaLivro.innerHTML += "<option value="+categorias[index]+">"+categorias[index]+"</option>";
    }

});

buttonCadastrarCategoria.addEventListener("click", (e) => {
    e.preventDefault();

    isButtonHigh = buttonCadastrarCategoria.classList == "ativo"
    buttonCadastrarCategoria.classList = isButtonHigh ? "desativo" : "ativo";
});

buttonListarCategorias.addEventListener("click", () => {
    listaCategorias.innerHTML = "";
    for (let index = 0; index < categorias.length; index++) {
        listaCategorias.innerHTML += "<p>" + categorias[index] + "</p>"
        
    }

});
