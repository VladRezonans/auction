module.exports = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "postgres",
  "database": "auction",
  "synchronize": false,
  "logging": true,
  "entities": ['dist/entity/*.js'],
  "migrations": ['/migrations/*.{ts,js}'],
  "cli": {
    "migrationsDir": "src/migrations"
  }
};
