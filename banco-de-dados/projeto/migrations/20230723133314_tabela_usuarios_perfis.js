exports.up = function (knex, Promise) {
  return removeForeignKeyChecks()
    .then(createUserProfileTable)
    .then(addForeignKeyChecks);

  function removeForeignKeyChecks() {
    return knex.raw("SET foreign_key_checks = 0;");
  }

  function addForeignKeyChecks() {
    return knex.raw("SET foreign_key_checks = 1;");
  }

  function createUserProfileTable() {
    return knex.schema.createTable("usuarios_perfis", function (table) {
      table.integer("usuario_id").unsigned();
      table.integer("perfil_id").unsigned();
      table.foreign("usuario_id").references("usuarios.id");
      table.foreign("perfil_id").references("perfis.id");
      table.primary(["usuario_id", "perfil_id"]);
    });
  }
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("usuarios_perfis");
};
