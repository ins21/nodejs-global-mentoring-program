import Sequelize from 'sequelize';
import { config } from '../config';

const { name, user, password, host, dialect, logging } = config;

export const sequelize = new Sequelize(name, user, password, { host, dialect, logging });

sequelize.sync();

sequelize.authenticate()
  .then(() => console.log(`Successfully connected to the database '${name}'`))
  .catch(err => console.error('Unable to connect to the database:', err));
