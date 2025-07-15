const categorias = [
    "romance",
    "aventura",
    "ação"
];

const livros = [
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

//Validando de existe usuário logado
if(!localStorage.getItem("user")){
    window.location.href = "index.html";
}

const regex = /^[a-z, A-Z]+$/;

const buttonCadastrarLivro = document.getElementById("button-cadastrar-livro");
const buttonCadastrarCategoria = document.getElementById("button-cadastrar-categoria");
const buttonListarCategorias = document.getElementById("button-listar-categorias")
const buttonListarLivros = document.getElementById("button-listar-livros")

const formLivro = document.getElementById("form-livro");
const formCategoria = document.getElementById("form-categoria");
const listaCategorias = document.getElementById("lista-categorias");
const listaLivros = document.getElementById("lista-livros");

const selectCategoriaLivro = document.getElementById("select-categoria-livro");

//inicio ações das categorias
//Cadastrar categoria
formCategoria.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeCategoria = document.getElementById("nome-categoria").value.toLowerCase(); 

    if(categorias.find(c => c === nomeCategoria)){
        alert("Categoria já existe");
    }else{
        categorias.push(nomeCategoria);
        alert(`Categoria ${nomeCategoria} cadastrada com sucesso!`)
        console.log(categorias);
    }

    formCategoria.reset();
});

//Alterar nome
document.getElementById("alterar-categoria").addEventListener("click", (e) => {
    e.preventDefault();

    const nomeCategoria = document.getElementById("nome-categoria-alt-del").value;

    if(categorias.find(c => c === nomeCategoria)){
        let novoNomeCategoria = prompt("Digite o novo nome para categoria: ");
        if(novoNomeCategoria == null ||  novoNomeCategoria == ""){
            alert("Nome inválido!")
        }else{
            categorias[categorias.indexOf(nomeCategoria)] = novoNomeCategoria;
        }
    }else{
        alert("Categoria não encontrada");
    }

    document.getElementById("categoria-update-delete").reset();
    buttonListarCategorias.click();
});

//Delerar categoria
document.getElementById("deletar-categoria").addEventListener("click", (e) => {
    e.preventDefault();

    const nomeCategoria = document.getElementById("nome-categoria-alt-del").value;

    if(categorias.find(c => c === nomeCategoria)){
        confirmacao = prompt("Digite o nome da categoria para confirmar: ")
        if(nomeCategoria === confirmacao){
            categorias.splice(categorias.indexOf(nomeCategoria), 1);
        }else{
            alert("Nome digitado errado");
            buttonListarCategorias.click();
        }
    }else{
        alert("Categoria não encontrada");
    }

    document.getElementById("categoria-update-delete").reset();
    buttonListarCategorias.click();
});
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
        alert("Livro cadatrado com sucesso!")
        console.log(livros);
    }

    formLivro.reset();
});

//deletar livro
document.getElementById("deletar-livro").addEventListener("click", (e) => {
    e.preventDefault();

    const nomeLivro = document.getElementById("nome-livro-alt-del").value;

    if(livros.find(l => l.titulo === nomeLivro)){
        confirmacao = prompt("Digite o nome do livro para confirmar: ")
        if(nomeLivro === confirmacao){
            livros.splice(livros.findIndex(l => l.titulo === nomeLivro), 1);
            console.log(livros);
        }else{
            alert("Nome digitado errado");
            buttonListarCategorias.click();
        }
    }else{
        alert("Livro não encontrada");
    }

    document.getElementById("livro-update-delete").reset();
    buttonListarLivros.click();
});

function deletar_livro(nome_livro){
    const nomeLivro = nome_livro;

    if(livros.find(l => l.titulo === nomeLivro)){
        //confirmacao = prompt("Digite o nome do livro para confirmar: ")
        if(true){
            livros.splice(livros.findIndex(l => l.titulo === nomeLivro), 1);
            console.log(livros);
        }else{
            alert("Nome digitado errado");
            buttonListarCategorias.click();
        }
    }else{
        alert("Livro não encontrada");
    }

    document.getElementById("livro-update-delete").reset();
    buttonListarLivros.click();
}

//Editar livro
var nomeLivroEdit;
document.getElementById("alterar-livro").addEventListener("click", (e) => {
    e.preventDefault();

    const nomeLivro = document.getElementById("nome-livro-alt-del").value;

    if(livros.find(l => l.titulo === nomeLivro)){
        document.getElementById("livro-update-delete").style.display = "none";
        document.getElementById("form-editar-livro").style.display = "";

        const selectEditarLivro = document.getElementById("select-editar-categoria-livro");

        categorias.forEach(categoria => {
            selectEditarLivro.innerHTML += "<option>"+ categoria +"</option>"
        });
    }else{
        alert("Livro não encontrada");
    }
});
document.getElementById("form-editar-livro").addEventListener("submit", (e) => {
    e.preventDefault();
    const nomeLivro = nomeLivroEdit;
    
    const novoTitulo = document.getElementById("editar-titulo-livro").value;
    const novoAutor = document.getElementById("editar-autor-livro").value;
    const novoCategoria = document.getElementById("select-editar-categoria-livro").value;

    let indexLivro = livros.findIndex(l => l.titulo == nomeLivro);

    livros[indexLivro].titulo = novoTitulo;
    livros[indexLivro].autor = novoAutor;
    livros[indexLivro].categoria = novoCategoria;

    alert("Livro atualizado");

    document.getElementById("livro-update-delete").reset();
    buttonListarLivros.click();

});

function editar_livro(nome_livro){
    nomeLivroEdit = nome_livro;
    document.getElementById("livro-update-delete").style.display = "none";
    document.getElementById("form-editar-livro").style.display = "";

    const selectEditarLivro = document.getElementById("select-editar-categoria-livro");

    categorias.forEach(categoria => {
        selectEditarLivro.innerHTML += "<option>"+ categoria +"</option>"
    });

}
//Fim ações livros


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

    const categoriasCadastradas = document.getElementById("categorias-cadastradas");


    categoriasCadastradas.innerHTML = "";
    for (let index = 0; index < categorias.length; index++) {
        categoriasCadastradas.innerHTML += "<tr><th>" + categorias[index] + "</th></tr>"
        
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

    document.getElementById("livro-update-delete").style.display = "";
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
                    <th>" ${livros[index].titulo} "</th>
                    <th>" ${livros[index].autor} "</th>
                    <th>" ${livros[index].categoria} "</th> 
                    <th><button onclick="editar_livro('${livros[index].titulo}')">Editar</button></th> 
                    <th><button onclick="deletar_livro('${livros[index].titulo}')">Deletar</button></th> 
                </tr>`;
        }
    }else{
        for (let index = 0; index < livros.length; index++) {
            if(livros[index].categoria == filtroLivro.value){
                livrosCadastrados.innerHTML += "<tr><th>"+ livros[index].titulo +"</th><th>"+ livros[index].autor +"</th><th>"+ livros[index].categoria +"</th></tr>";
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

document.getElementById("select-filtro-livro").addEventListener("input", () => {
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

buttonCadastrarLivro.click();



