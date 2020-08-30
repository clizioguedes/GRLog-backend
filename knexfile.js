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
      database: "ddqkgms0i94bm",
      user: "nlkqgvqpajsydh",
      password: "bd3b70474dd68dbb3a3bb4131983f331aefe882f11568f1e741793f1fce94967",
      host: "ec2-107-20-15-85.compute-1.amazonaws.com",
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
