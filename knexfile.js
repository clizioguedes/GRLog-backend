// Update with your config settings.

module.exports = {
  development: {
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
