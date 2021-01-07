import { Sequelize } from "sequelize";

import { config } from "../configs";

const { db_user, db_name, db_host, db_port, db_password } = config;

export const db = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  port: JSON.parse(db_port),
  username: db_user,
  password: db_password,
  database: db_name,
  dialect: "postgres",
});
