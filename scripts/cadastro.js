const categorias = [
    "romance",
    "aventura",
    "ação"
];

const buttonCadastrarLivro = document.getElementById("button-cadastrar-livro");
const buttonCadastrarCategoria = document.getElementById("button-cadastrar-categoria");


const formCategoria = document.getElementById("form-categoria");

formCategoria.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeCategoria = document.getElementById("nome-categoria").value.toLowerCase(); 

    alert(nomeCategoria);
    if(categorias.find(c => c === nomeCategoria)){
        alert("Categoria já existe");
    }else{
        categorias.push(nomeCategoria);
        console.log(categorias);
    }
});

buttonCadastrarLivro.addEventListener("click", (e) => {
    e.preventDefault();

    isButtonHigh = buttonCadastrarLivro.classList == "ativo"
    buttonCadastrarLivro.classList = isButtonHigh ? "desativo" : "ativo";
});

buttonCadastrarCategoria.addEventListener("click", (e) => {
    e.preventDefault();

    isButtonHigh = buttonCadastrarCategoria.classList == "ativo"
    buttonCadastrarCategoria.classList = isButtonHigh ? "desativo" : "ativo";
});
