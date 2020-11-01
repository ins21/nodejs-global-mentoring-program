import dotenv from 'dotenv';

dotenv.config();

export const config = {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  jwt_secret: process.env.JWT_SECRET,
  dialect: 'postgres',
  logging: false
};
