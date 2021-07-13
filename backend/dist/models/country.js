"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
var sequelize_1 = require("sequelize");
var database_1 = require("../db/database");
exports.Country = database_1.sequelize.define('Country', {
    // Model attributes are defined here
    Code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Continent: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Region: {
        type: sequelize_1.DataTypes.STRING
    },
    SurfaceArea: {
        type: sequelize_1.DataTypes.STRING
    },
    IndepYear: {
        type: sequelize_1.DataTypes.SMALLINT
    },
    Population: {
        type: sequelize_1.DataTypes.INTEGER
    },
    LifeExpectancy: {
        type: sequelize_1.DataTypes.FLOAT
    },
    GNP: {
        type: sequelize_1.DataTypes.FLOAT
    },
    GNPOld: {
        type: sequelize_1.DataTypes.FLOAT
    },
    LocalName: {
        type: sequelize_1.DataTypes.STRING
    },
    GovernmentForm: {
        type: sequelize_1.DataTypes.STRING
    },
    HeadOfState: {
        type: sequelize_1.DataTypes.STRING
    },
    Capital: {
        type: sequelize_1.DataTypes.INTEGER
    },
    Code2: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    tableName: 'country'
});
