import React, { Component } from 'react';

import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import ListaDeCategorias from './components/ListaDeCategorias';

import './assets/App.css';
import './assets/index.css';
import Categorias from './dados/Categorias';
import Notas from './dados/Notas';
class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
    this.state = {
      notas: [],
      categorias: ["Projetos", "Podcasts"]
    };
  }

  // criarNota(titulo, texto, categoria) {
  //   const novaNova = { titulo, texto, categoria };
  //   const novoArrayNotas = [...this.state.notas, novaNova];
  //   const novoEstado = {
  //     notas: novoArrayNotas
  //   };
  //   this.setState(novoEstado);
  //   console.log(`uma nova nota foi criada com o titulo: ${titulo} e o texto ${texto}`);
  // }

  // adicionarCategoria(descricao) {
  //   const novoArrayCategorias = [...this.state.categorias, descricao];
  //   const novoEstado = { ...this.state, categorias: novoArrayCategorias };
  //   this.setState(novoEstado);
  //   console.log(`uma nova categoria foi criada com a descricao: ${descricao}`);
  // }

  // deletarNota(index) {
  //   let arrayNotas = this.state.notas;
  //   arrayNotas.splice(index, 1);
  //   this.setState({ notas: arrayNotas });
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} />
          <ListaDeNotas
            notas={this.notas}
            apagarNota={this.notas.apagarNota.bind(this.notas)}
          />
        </main>

      </section>
    );
  }
}

export default App;
