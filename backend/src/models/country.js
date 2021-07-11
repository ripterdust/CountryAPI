import { DataTypes } from 'sequelize';
import { sequelize } from '../db/database';

export const Country = sequelize.define('Country', {
    // Model attributes are defined here
    Code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Continent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Region: {
        type: DataTypes.STRING
    },
    SurfaceArea: {
        type: DataTypes.STRING
    },
    IndepYear: {
        type: DataTypes.SMALLINT
    },
    Population: {
        type: DataTypes.INTEGER
    },
    LifeExpectancy: {
        type: DataTypes.FLOAT
    },
    GNP: {
        type: DataTypes.FLOAT
    },
    GNPOld: {
        type: DataTypes.FLOAT
    },
    LocalName: {
        type: DataTypes.STRING
    },
    GovernmentForm: {
        type: DataTypes.STRING
    },
    HeadOfState: {
        type: DataTypes.STRING
    },
    Capital: {
        type: DataTypes.INTEGER
    },
    Code2: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'country'
});
