// 1 - Componente comeca com letra maiscula
// 2 - Componente deve ser funcao ou classe
// 3 - II deve RETORNAR UM componente / elemento html
// 4 - II deve ser exportado

import { useEffect, useState } from "react";
import { Produto } from '../Models/Produto';

function ProdutoListar() {
    // não precisa, mas é bom deixar o mesmo nome pra arquivo e função

    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        // funcao utilizada para executar algum codigo ao abrir / renderizar o componente
        // AXIOS: biblioteca de requisicoes
        fetch("http://localhost:5020/api/produto/listar")
        .then(resposta => {
            if (!resposta.ok) {
                throw new Error('Erro na requisição: ' + resposta.statusText);
            }
            return resposta.json();
        })
        .then(dados => {
            setProdutos(dados);
        })
        .catch(erro => {
            console.log("Erro: ", erro);
        });
    }, []);
    
    return (
        <>
        <div>
            <h1>Lista de Produtos</h1>
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
            </div>
        </>
        // fragmento
    );
}

export default ProdutoListar;