"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
var sequelize_1 = require("sequelize");
var database_1 = require("../db/database");
exports.City = database_1.sequelize.define('City', {
    // Model attributies are defined here
    ID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    Name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    CountryCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    District: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Population: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false
    }
}, {
    tableName: 'city'
});
