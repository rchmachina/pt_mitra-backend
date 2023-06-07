const { db } =require("../config");
const {
    DataTypes,
} = require('sequelize');

const item = db.define('item',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        unit: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn: [['kg', 'pcs']],
            }
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        ktp: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        tipeDiskon: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {

        deletedAt: 'destroyTime',
        tableName: 'item'
    });

module.exports = {item}