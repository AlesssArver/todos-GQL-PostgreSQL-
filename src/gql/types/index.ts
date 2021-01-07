import { gql } from "apollo-server";

export const schema = gql`
  type User {
    name: String!
    email: String!
    email_confirmed: Boolean
    password: String!
  }

  type Todo {
    text: String!
    is_completed: Boolean!
  }

  input UserRegisterInput {
    name: String!
    email: String!
    password: String!
  }
  type Query {
    users: [User]
    user(id: ID!): User

    todos: [Todo!]!
    todo(id: ID!): Todo
  }

  type Mutation {
    register(user: UserRegisterInput!): User!
    login(email: String!, password: String!): User!
    user_update_name(id: ID!, name: String!): User
    user_update_email(id: ID!, email: String!): User
    user_update_password(id: ID!, password: String!): User
    user_remove(id: ID!): User

    todo_create(text: String!): Todo
    todo_update(text: String!): Todo
    todo_remove(id: ID!): Todo
  }

  type Subscription {
    todo_added: Todo!
    todo_updated: Todo!
  }
`;
