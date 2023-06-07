const {item,sale,customer} = require('../models/')


const route =(app)=>{


    app.get('/api/item', async (req, res) => {
        try {
          const users = await item.findAll();
          res.json(users);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred' });
        }

    })

    app.get('/api/sale', async (req, res) => {
        try {
          const users = await sale.findAll();
          res.json(users);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred' });
        }

    })
    app.get('/api/customer', async (req, res) => {
        try {
          const users = await customer.findAll();
          res.json(users);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred' });
        }

    })


      


}