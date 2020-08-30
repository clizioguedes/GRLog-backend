// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "pg",
    connection: {
      database: "orcamentos",
      user: "postgres",
      password: "root",
      host: "127.0.0.1",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: "knex_migrations",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: {
      database: "orcamentos",
      user: "postgres",
      password: "root",
      host: "127.0.0.1",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: "knex_migrations",
    },
    useNullAsDefault: true,
  },
};
