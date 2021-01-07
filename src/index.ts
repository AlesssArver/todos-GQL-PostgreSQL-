require("dotenv").config();
import "reflect-metadata";
import Koa from "koa";
import cors from "@koa/cors";

// import "./middleware/apollo-server";
import { config, corsOptions } from "./configs";
// import {
//   apolloServer,
//   graphqlPath,
//   subscriptionsPath,
// } from "./init/apollo-server";
import { db } from "./db/init";
import { libs } from "./libs";
import { ApolloServer } from "apollo-server";
import { schema } from "./gql/types";
import { resolvers } from "./gql/resolvers";

export const app = new Koa();

libs.forEach((value) => app.use(value));

app.use(cors(corsOptions));

db.authenticate()
  .then(() => console.log("DB was connected"))
  .catch((e) => console.log(`Error: `, e));

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

app.on("error", (e, ctx) => console.log("server error", e, ctx));

apolloServer.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
