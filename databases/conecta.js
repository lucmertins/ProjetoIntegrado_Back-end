import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "training_calendar", "root", "teste", {
  dialect: "mysql",
  host: "192.168.100.4",
  port: 3306
});
