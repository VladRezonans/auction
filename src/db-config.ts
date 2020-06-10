import * as path from 'path';

const ext = path.extname(__filename);
const dir = (ext === '.js') ? 'dist' : 'src';
const entityPath = `${dir}/entity/*.js`;

export default {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "postgres",
  "database": "auction",
  "synchronize": false,
  "logging": true,
  "entities": [entityPath],
  "migrations": ['/migrations/*.{ts,js}'],
  "cli": {
    "migrationsDir": "src/migrations"
  }
};
