let config = require('../config/database');
const isDev = require('electron-is-dev');

let env = isDev ? 'dev' : 'production';
let knex = require('knex')(config[env]);

let bookshelf = require('bookshelf')(knex);

module.exports = bookshelf.Model;