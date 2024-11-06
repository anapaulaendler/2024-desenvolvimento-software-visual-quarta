import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import './ProdutoCadastrar.css'

function ProdutoCadastrar() {

    const [nome, setNome] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [preco, setPreco] = useState<number>(0);
    const [quantidade, setQuantidade] = useState<number>(0);

    function handleSubmit (e: any) {
        e.preventDefault();

        const novoProduto = {
            nome,
            descricao,
            preco,
            quantidade
        };

        fetch("http://localhost:5020/api/produto/cadastrar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoProduto)
        })

        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json();
        })

        .then(data => {
            setNome('');
            setDescricao('');
            setPreco(0);
            setQuantidade(0);
        })

        .catch(error => {
            console.error('Erro:', error);
        });

    };

    return (
      <div>
        <h1>Cadastro de Produtos</h1>

        <form onSubmit={handleSubmit}>
        <label>
            Nome:
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
        </label>
        <label>
            Descrição:
            <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} required />
        </label>
        <label>
            Preço:
            <input type="number" value={preco} onChange={e => setPreco(Number(e.target.value))} required />
        </label>
        <label>
            Quantidade:
            <input type="number" value={quantidade} onChange={e => setQuantidade(Number(e.target.value))} required />
        </label>
        <button type="submit">Cadastrar</button>
        </form>
      </div>
    );

};
  
  export default ProdutoCadastrar;