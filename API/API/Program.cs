//Testar as APIs
// - Rest Client - Extensão do VS Code
// - Postman
// - Insomnia
//MINIMAL APIs - C# - Minimal APIs

using API.Models;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();


List<Produto> produtos = new List<Produto>();
produtos.Add(new Produto()
{
    Nome = "Notebook",
    Preco = 5000,
    Quantidade = 54
});
produtos.Add(new Produto()
{
    Nome = "Desktop",
    Preco = 3500,
    Quantidade = 150
});
produtos.Add(new Produto()
{
    Nome = "Monitor",
    Preco = 1200,
    Quantidade = 15
});
produtos.Add(new Produto()
{
    Nome = "Caixa de Som",
    Preco = 650,
    Quantidade = 70
});


//EndPoints - Funcionalidades
//Request - Configurar a URL e o método/verbo HTTP
//Reponse - Retornar os dados (json/xml) e 
app.MapGet("/", () => "API de Produtos");

//GET: /produto/listar
app.MapGet("/produto/listar", () =>
{
    if (produtos.Count > 0)
    {
        return Results.Ok(produtos);
    }
    return Results.NotFound();
});

app.MapGet("/produto/buscar/{nome}", (string nome) => {
    foreach(Produto produtoCadastrado in produtos)
    {
        if (produtoCadastrado.Nome == nome)
        {
            return Results.Ok(produtoCadastrado);
        }
    }
    return Results.NotFound();
});
//POST: /produto/cadastrar
app.MapPost("/produto/cadastrar", 
    ([FromBody] Produto produto) =>
{
    produtos.Add(produto);
    return Results.Created("", produto);
    /*
    //Criar o objeto e preencher
    Produto produto = new Produto();
    produto.Nome = nome;
    //Adicionando dentro da lista
    produtos.Add(produto);
    return Results.Ok(produtos);
    */
});

//Criar um funcionalidade para receber informações
// - Receber informações pela URL da req
// - Receber informações pelo corpo da req
//Guardar as informações em uma lista

app.Run();

//C# - Utilização dos gets e sets
// Produto produto = new Produto()
// {
//     Nome = "",
//     Preco = 5,
//     Quantidade = 150
// };
// Console.WriteLine("Preço: " + produto.Preco);

//JAVA - Utilização dos gets e sets
// Produto produto = new Produto();
// produto.setPreco(5);
// Console.WriteLine("Preço: " + 
//     produto.getPreco());

/* exercicios:
    remover produto 
    aterar produto */