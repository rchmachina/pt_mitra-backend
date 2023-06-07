const { db } =require("../config");
const {
    DataTypes,
} = require('sequelize');

const sale = db.define('sale',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        codeTransaksi: {
            type: DataTypes.STRING,
            allowNull:false
        },
        dateTransaksi: {
            type: DataTypes.DATE,
            allowNull:false
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        totalDiskon: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        totalHarga: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalBayar: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        deletedAt: 'destroyTime',
        tableName: 'sale'
    }
);

module.exports =  {sale}
