import React from 'react';
import ConsultarCEP from './components/examples/ConsultarCEP';
import ProdutoListar from './components/pages/produto/ProdutoListar';
import ProdutoCadastrar from './components/pages/produto/ProdutoCadastrar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/pages/produto/listar"}>Listar Produtos</Link>
          </li>
          <li>
            <Link to={"/pages/produto/cadastrar"}>Cadastrar Produto</Link>
          </li>
          <li>
            <Link to={"/pages/endereco/consultar"}>Consultar CEP</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoListar/>}/>
        <Route path="/pages/produto/listar" element={<ProdutoListar/>}/>
        <Route path="/pages/produto/cadastrar" element={<ProdutoCadastrar/>}/>
        <Route path="/pages/endereco/consultar" element={<ConsultarCEP/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
