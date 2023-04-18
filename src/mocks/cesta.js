import logo from '../../assets/logo.png';

import Whey from '../../assets/frutas/Whey.png';
import Creatina from '../../assets/frutas/Creatina.png';
import Albumina from '../../assets/frutas/Albumina.png';
import Treino from '../../assets/frutas/Treino.png';
import Barrinhas from '../../assets/frutas/Barrinhas.png';

const cesta = {
  topo: {
    titulo: "Qualidade internacional",
  },
  detalhes: {
    nome: "Suplementos",
    logoFazenda: logo,
    nomeFazenda: "Empower Supplements",
    descricao: "Se você quer economizar na compra dos seus suplementos, Empower Supplements é o lugar certo.",
    preco: "R$ 79,90",
    botao: "Comprar",
  },
  itens: {
    titulo: "Produtos",
    lista: [
      {
        nome: "Whey Protein",
        imagem: Whey,
      },
      {
        nome: "Creatina",
        imagem: Creatina,
      },
      {
        nome: "Albumina",
        imagem: Albumina,
      },
      {
        nome: "Pré-Treino",
        imagem: Treino,
      },
      {
        nome: "Barrinhas",
        imagem: Barrinhas,
      }
    ]
  }
}

export default cesta;