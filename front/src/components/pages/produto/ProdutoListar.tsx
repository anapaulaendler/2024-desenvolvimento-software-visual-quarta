import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import './ProdutoListar.css'; 

function ProdutoListar() {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
    fetch("http://localhost:5020/api/produto/listar")
         .then(resposta => {
             return resposta.json();
         })
         .then(produtos => {
             setProdutos(produtos);
         })
    });

    return (
      <div>
        <h1>Listagem de Produtos</h1>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Criado Em</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.descricao}</td>
              <td>{produto.preco}</td>
              <td>{produto.quantidade}</td>
              <td>{new Date(produto.criadoEm).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    );
  }
  
  export default ProdutoListar;