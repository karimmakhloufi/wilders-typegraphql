import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { WilderResolver } from "./resolvers/wilder.resolver";

(async () => {
  const schema = await buildSchema({
    resolvers: [WilderResolver],
  });
  const server = new ApolloServer({ schema });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
})();
