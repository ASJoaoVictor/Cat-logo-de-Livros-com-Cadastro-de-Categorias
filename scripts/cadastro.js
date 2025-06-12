const buttonCadastrarLivro = document.getElementById("button-cadastrar-livro");
const buttonCadastrarCategoria = document.getElementById("button-cadastrar-categoria");

buttonCadastrarLivro.addEventListener("click", () => {
    buttonCadastrarLivro.classList = "ativo";
});

buttonCadastrarCategoria.addEventListener("click", (e) => {
    e.preventDefault();
    buttonCadastrarLivro.classList = "desativo";
});
