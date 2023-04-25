const { ApolloServer, gql } = require("apollo-server");

const usuarios = [
  {
    id: 1,
    nome: "joao silva",
    email: "jsilva@gmail.com",
    idade: 29,
  },
  {
    id: 2,
    nome: "rafael junior",
    email: "rafjr@gmail.com",
    idade: 31,
  },
  {
    id: 3,
    nome: "Daniela Smith",
    email: "danismi@gmail.com",
    idade: 24,
  },
];

const typeDefs = gql`
  scalar Date

  type Produto {
    nome: String!
    preco: Float!
    desconto: Float
    precoComDesconto: Float
  }

  type Usuario {
    id: Int
    nome: String
    email: String
    idade: Int
    salario: Float
    vip: Boolean
  }

  # Pontos de entrada da sua api
  type Query {
    ola: String!
    horaAtual: Date!
    usuarioLogado: Usuario
    produtoEmDestaque: Produto
    numerosMegaSena: [Int!]!
    usuarios: [Usuario]
    usuario(id: Int): Usuario
  }
`;

const resolvers = {
  Produto: {
    precoComDesconto(produto) {
      if (produto.desconto) {
        return produto.preco * (1 - preco.desconto);
      } else {
        return produto.preco;
      }
    },
  },
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
  },
  Query: {
    ola() {
      return "Bom dia";
    },
    horaAtual() {
      return new Date();
    },
    usuarioLogado(obj) {
      console.log(obj);
      return {
        id: 1,
        nome: "Anan",
        email: "anadawweb@yahoo.com.br",
        idade: 32,
        salario: 4234.23,
        vip: true,
      };
    },

    produtoEmDestaque() {
      return {
        nome: "Notebook Gamer",
        preco: 4890.89,
        desconto: 0.5,
      };
    },

    numerosMegaSena() {
      //return [4, 8, 13, 27, 33, 54]
      const crescente = (a, b) => a - b;
      return array(6)
        .fill(0)
        .map((n) => parseInt(Math.random() * 60 + 1))
        .sort(crescente);
    },
    usuarios() {
      return usuarios;
    },
    usuario(_, { id }) {
      const sels = usuarios.filter((u) => u.id === id);
      return sels ? sels[0] : null;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando certinho em ${url}`);
});
