// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'orcamentos',
    port: 5432
  },
    migrations: {
      directory: './database/migrations'
    },
    useNullAsDefault: true
  },

  production: { 
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations",
    },
  }
};
