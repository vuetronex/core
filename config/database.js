const electron = require('electron');

module.exports = {
    dev: {
        client: 'sqlite3',
        connection: {
            filename: './db/database.sqlite3'
        },
        useNullAsDefault: true
    },
    production: {
        client: 'sqlite3',
        connection: {
            filename: electron.remote.app.getPath('userData') + '/database.sqlite3'
        },
        useNullAsDefault: true
    }
}
