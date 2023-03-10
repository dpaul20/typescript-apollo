import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import { schema } from "./schema";
import { context } from "./context";

export const server = new ApolloServer({
  schema,
  context,
  introspection: true, // 1  Introspection is a feature that allows a GraphQL client to ask a GraphQL server for information about what queries it supports. Apollo turns off introspection in production by default as a security measure. However, you are keeping introspection as it makes it easier to explore the API, though this is not something you usually do in a production application.
  plugins: [ApolloServerPluginLandingPageLocalDefault()], // 2 Similar to introspection, Apollo also turns off Apollo Sandbox in the production version of an app. Once again, as this is not a real application with production workloads, we explicitly decided to keep it on for convenience.
});

const port = process.env.PORT || 3000; // 3 Previously, Apollo Server was running on port 3000 on your local machine. Heroku will provide the port number the app will run on through the port environment variable in production.

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server  ready at ${url}`);
});
