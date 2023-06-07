const { db } =  require ("../config");
const {customer} = require ("./customer");
const {item} = require ("./item");
const {sale} = require ("./sale");

const initModels = async () => {

    //relational model between sale and item
    sale.hasMany(item,{
        foreignKey: "saleItemId",
    });
    item.belongsTo(sale,{
        foreignKey: "saleItemId",
    }); 

    //relational model between sale and customer

    sale.hasMany(customer,{
        foreignKey: "saleCustomerId",
    });
    customer.belongsTo(sale,{
        foreignKey: "saleCustomerId",
    }); 



    await db.sync({ alter: true, force: true})
        .then(() => {
            console.log("All models has been synchronized successfully.");
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            console.log("Model initialization completed");
        });
    }

module.exports = {initModels, item,sale,customer}