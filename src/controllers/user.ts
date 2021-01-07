import { UserModel } from "../db/models/user";

export const getUsers = async () => {
  const users = await UserModel.findAll();
  console.log("users", users);
};

export const getUser = async (id: any) => {
  const user = await UserModel.findOne({ where: { id } });
  console.log("user", user);
};

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  const user = await UserModel.create({ name, email, password });
  console.log(user);
};

export const updateUserName = async (id: number, name: string) => {
  const user = await UserModel.update({ name }, { where: { id } });
  console.log("user", user);
};

export const updateUserEmail = async (id: number, email: string) => {
  const user = await UserModel.update({ email }, { where: { id } });
  console.log("user", user);
};

export const updateUserPassword = async (id: number, password: string) => {
  const user = await UserModel.update({ password }, { where: { id } });
  console.log(user);
  console.log("user", user);
};

export const removeUser = async (id: number) => {
  const user = await UserModel.destroy({ where: { id } });
  console.log("user", user);
};
