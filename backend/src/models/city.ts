import { DataTypes } from 'sequelize';
import { sequelize } from '../db/database';

export const City = sequelize.define('City',{
    // Model attributies are defined here
    ID: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CountryCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    District: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Population: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
},{
    tableName: 'city'
});