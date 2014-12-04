exports.up = function(knex, Promise) {
  knex.schema.createTable('contacts', function (table) {
    table.increments('id').primary().unique();

    table.string('firstName').notNullable() ;
    table.string('lastName').notNullable() ;
    table.string('email');
    table.string('phone');
    table.string('address');
    table.string('city');
    table.integer('zipCode');

    table.integer('stateId')
    .references('id')
    .inTable('states');

    table.timestamps();
  }).then(function () {
    console.log('Contacts table created!');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};