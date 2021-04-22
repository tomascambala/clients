const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const uri = "mongodb+srv://tomas:123@cluster0.uyrfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

global.client = require('./api/models/clientModel');
const routes = require('./api/routes/clientsRoutes');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},(e)=>{
  console.log("connected to DB")
});

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server is running on ${port}`);
