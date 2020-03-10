import express from "express";
import { ApolloServer } from "apollo-server-express";
import gql from "graphql-tag";
import { meetups } from "./data/meetups";
import { fetchEvents } from "./fetch";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Event {
    name: String
    link: String
    time: String
    group: String
  }
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
    upcomingEvents: [Event]
  }
`;

type GraphEvent = {
  name: string;
  link: string;
  time: string;
  group: string;
};

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    groups: () => {
      return meetups;
    },
    upcomingEvents: async () => {
      const groupEvents = await Promise.all(
        meetups.map(m => {
          return fetchEvents(m.meetupslug).then(events => {
            return {
              group: m.meetupslug,
              events
            };
          });
        })
      );
      const events: GraphEvent[] = groupEvents
        .map(({ group, events }) => {
          return events.map(e => {
            return {
              name: e.name,
              link: e.link,
              time: String(e.time),
              group
            };
          });
        })
        .flat();
      return events;
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
