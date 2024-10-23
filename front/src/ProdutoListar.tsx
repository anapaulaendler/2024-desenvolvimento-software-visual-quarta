// 1 - Componente comeca com letra maiscula
// 2 - Componente deve ser funcao ou classe
// 3 - II deve RETORNAR UM componente / elemento html
// 4 - II deve ser exportado

import { useEffect } from "react";

function ProdutoListar() {
    // não precisa, mas é bom deixar o mesmo nome pra arquivo e função
    useEffect(() => {
        // funcao utilizada para executar algum codigo ao abrir / renderizar o componente
        // AXIOS: biblioteca de requisicoes
        fetch("https://viacep.com.br/ws/01001000/json/")
        .then(resposta => {
            return resposta.json();
        })
        .then(cep => {
            console.log(cep);
        })
    });

    /* TAREFA:
    exibir alguma info do cep no navegador (na div)
    realizar requisicao da api
    resolver o problema que vai ser mostrado no console
    exibir a lista de proodutos no navegador */
    
    return (
        <>

        </>
        // fragmento
    );
}

export default ProdutoListar;