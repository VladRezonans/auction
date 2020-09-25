import * as path from 'path';

const ext = path.extname(__filename);
const dir = (ext === '.js') ? 'dist' : 'src';
const entityPath = `${dir}/entity/*.{ts,js}`;

require('dotenv').config();

export default {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": 5432,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": "auction",
  "synchronize": false,
  "logging": true,
  "entities": [entityPath],
  "migrations": ['src/migrations/*.js'],
  "cli": {
    "migrationsDir": "src/migrations"
  }
};
