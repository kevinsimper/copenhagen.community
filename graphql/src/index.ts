import express from "express";
import { ApolloServer } from "apollo-server-express";
import gql from "graphql-tag";
import { meetups } from "./data/meetups";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Group {
    name: String
    url: String
    meetupslug: String
    image: String
    logo: String
    color: String
  }
  type Query {
    hello: String
    groups: [Group]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    groups: () => {
      return meetups;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

app.get("/", (req, res) => {
  res.send("Copenhagen.community GraphQL");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log("Listening on localhost:" + PORT);
});
