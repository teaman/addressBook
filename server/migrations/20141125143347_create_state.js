exports.up = function(knex, Promise) {
  knex.schema.createTable('states', function (table) {
    table.increments('id').primary().unique();

    table.string('state').notNullable() ;
    table.string('abbr').notNullable() ;

  }).then(function () {
    console.log('States table created!');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('states');
};