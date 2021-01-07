import { ApolloError } from "apollo-server";

import { getUsers, getUser } from "./../../controllers/user";

export const userQueries = {
  users: () => {
    try {
      console.log("query users success");
      return getUsers();
    } catch ({ message }) {
      console.log("query users error!!!");
      throw new ApolloError(message);
    }
  },
  user: (_: any, { id }: any) => {
    try {
      return getUser(id);
    } catch ({ message }) {
      throw new ApolloError(message);
    }
  },
};
