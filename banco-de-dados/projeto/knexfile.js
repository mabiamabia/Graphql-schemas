module.exports = {
  client: "mysql",
  connection: {
    database: "exercicios",
    user: "root",
    password: "12345678",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
