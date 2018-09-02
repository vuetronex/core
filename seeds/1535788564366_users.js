const bcrypt = require('bcrypt');

exports.seed = function (knex, Promise) {
    return knex('users').del()
        .then(function () {
            return knex('users').insert([
                { name: 'Kazi Mainuddin Ahmed', email: 'mailtokmahmed@gmail.com', password: bcrypt.hashSync('secret', 10), created_at: new Date, updated_at: new Date },
                { name: 'Nazia Sultana', email: 'kazimahmed@outlook.com', password: bcrypt.hashSync('secret', 10), created_at: new Date, updated_at: new Date }
            ]);
        });
};