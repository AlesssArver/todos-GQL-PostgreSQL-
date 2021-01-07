import { ApolloError } from "apollo-server";

import {
  createUser,
  updateUserName,
  updateUserEmail,
  updateUserPassword,
  removeUser,
} from "../../controllers/user";

export const userMutations = {
  register: (_: any, { user }: any) => {
    try {
      const { name, email, password } = user;
      return createUser(name, email, password);
    } catch ({ message }) {
      throw new ApolloError(message);
    }
  },
  user_update_name: (id: number, name: string) => {
    try {
      return updateUserName(id, name);
    } catch ({ message }) {
      throw new ApolloError(message);
    }
  },
  user_update_email: (id: number, email: string) => updateUserEmail(id, email),
  user_update_password: (id: number, password: string) =>
    updateUserPassword(id, password),
  user_remove: (id: number) => removeUser(id),
};
