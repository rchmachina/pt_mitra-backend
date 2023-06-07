const { db } =require("../config");
const {
  DataTypes,
} = require('sequelize');

const customer = db.define('customer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    diskon: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipeDiskon:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['fixed', 'percentage','noDiscount']], 
      }
    },
    },{

      deletedAt: 'destroyTime',
      tableName: 'customer'
    }
  );

module.exports = {customer}