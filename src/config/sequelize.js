const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pt_mitra', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres',
    port:5432,
    define: {
      timestamps: false
    },
  });

module.exports =  sequelize