exports.up = function (knex) {
  return knex.schema.createTable("orcamentos", function (table) {
    table.string("id").primary();
    table.date("datacadastro").notNullable();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("celular", 11);
    table.string("produto").notNullable();
    table.string("peso").notNullable();
    table.string("valor").notNullable();
    table.string("origem").notNullable();
    table.string("destino").notNullable();
    table.string("observacao");
    table.string("status").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("orcamentos");
};
