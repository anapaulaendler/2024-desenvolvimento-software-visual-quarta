// 1 - Componente comeca com letra maiscula
// 2 - Componente deve ser funcao ou classe
// 3 - II deve RETORNAR UM componente / elemento html
// 4 - II deve ser exportado

import { useEffect, useState } from "react";

function ProdutoListar() {
    // não precisa, mas é bom deixar o mesmo nome pra arquivo e função

    const [cepInfo, setCepInfo] = useState(null);

    useEffect(() => {
        // funcao utilizada para executar algum codigo ao abrir / renderizar o componente
        // AXIOS: biblioteca de requisicoes
        fetch("https://viacep.com.br/ws/01001000/json/")
        .then(resposta => {
            return resposta.json();
        })
        .then(cep => {
            console.log(cep);
            setCepInfo(cep);
        })
        .catch(erro => {
            console.log("Erro: ", erro);
        });
    });

    /* TAREFA:
    exibir alguma info do cep no navegador (na div)
    realizar requisicao da api
    resolver o problema que vai ser mostrado no console
    exibir a lista de proodutos no navegador */
    
    return (
        <>
            <h1>informações do cep</h1>
            <div>
                {cepInfo ? (
                    <div>
                        <p>CEP: {cepInfo.cep}</p>
                        <p>Logradouro: {cepInfo.logradouro}</p>
                        <p>Bairro: {cepInfo.bairro}</p>
                        <p>Cidade: {cepInfo.localidade}</p>
                        <p>Estado: {cepInfo.uf}</p>
                    </div>
                ) : (
                    <p>Carregando informações...</p>
                )}
            </div>
        </>
        // fragmento
    );
}

export default ProdutoListar;