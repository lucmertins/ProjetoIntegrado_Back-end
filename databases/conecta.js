import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "training_calendar", "root", "teste", {
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306
});
