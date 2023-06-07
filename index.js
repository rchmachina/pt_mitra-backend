const express = require("express");
const cors = require("cors");
const { route } = require("./src/routes");
const {initModels} = require("./src/models");


initModels();
const app = express();
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

route(app);

app.get('/', async (req, res) => {
    try {

      res.json("succes");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

app.listen(6969, () => {
    console.log('Server is running on port 3000');
  });
