import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import gql from 'graphql-tag';

// Construct a schema, using GraphQL schema language
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

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.send('Copenhagen.community GraphQL');
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log('Listening on localhost:' + PORT);
});
