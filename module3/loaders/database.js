import Sequelize from 'sequelize';
import { db_config } from '../config/db_config';

const { name, user, password, host, dialect, logging } = db_config;

export const sequelize = new Sequelize(name, user, password, { host, dialect, logging });

sequelize.authenticate()
  .then(() => console.log(`Successfully connected to the database '${name}'`))
  .catch(err => console.error('Unable to connect to the database:', err));
