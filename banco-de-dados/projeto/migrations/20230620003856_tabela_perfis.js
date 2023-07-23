/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("perfis", (Table) => {
      table.increments("id").primary();
      table.string("nome").notNull().unique();
      table.string("rotulo").notNull();
    })
    .then(function () {
      return knex("perfis").insert([
        { nome: "comum", rotulo: "Comum" },
        { nome: "admin", rotulo: "Administrador" },
        { nome: "master", rotulo: "Master" },
      ]);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("perfis");
};
