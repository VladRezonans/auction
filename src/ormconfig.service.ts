const entityPath = 'dist/entity/*.js';

module.exports = {
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
