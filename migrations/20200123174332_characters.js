exports.up = function(knex) {
  return knex.schema.createTable("characters", table => {
      table.increments();
      table.string("name", 30).notNullable();
      table.string("house", 15).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("characters");
};
