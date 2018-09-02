var Model = require('../db');

var User = Model.extend({
    tableName: 'users'
});

module.exports = User;