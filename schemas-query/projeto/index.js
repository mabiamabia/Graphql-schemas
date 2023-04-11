const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: ID
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
  }
`;

const resolvers = {
  Query: {
    ola() {
      return "Bom dia";
    },
    horaAtual() {
      return new Date();
    },
    usuarioLogado() {
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
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
