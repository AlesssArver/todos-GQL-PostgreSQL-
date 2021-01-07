import { ApolloError } from "apollo-server";

export const tryCatch = (content: any) => {
  try {
    content;
  } catch ({ message }) {
    throw new ApolloError(message);
  }
};
