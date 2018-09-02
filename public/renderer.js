// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

window.Container = {
    fs: require('fs'),
    path: require("path"),
    db: {},
    electron: require('electron')
};

// Copy database...

// Load models...
Container.fs.readdirSync(Container.path.join(__dirname, "../models"))
.forEach(function(file) {
    var model = file.split('.').shift();
    Container.db[model] = require("../models/" + file);
});

require('./js/app.js');