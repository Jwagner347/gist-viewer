const { ApolloServer, gql } = require('apollo-server-lambda');
// const { schema } = require('./schema');
// const { resolvers } = require('./resolvers');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

exports.graphqlHandler = server.createHandler();