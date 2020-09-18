import dotenv from 'dotenv';

dotenv.config();

export const db_config = {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false
};
