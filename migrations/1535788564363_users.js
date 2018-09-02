exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name').nullable();
        table.string('email').nullable().unique();
        table.string('password').nullable();
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
