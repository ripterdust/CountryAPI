"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
// Connecting to database
exports.sequelize = new sequelize_1.Sequelize('world', 'root', 'marlyn2010', {
    logging: false,
    host: 'localhost',
    dialect: 'mysql'
});
try {
    exports.sequelize.authenticate();
    console.log('Db is connected');
}
catch (err) {
    console.log("Error: " + err);
}
