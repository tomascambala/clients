const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const uri = "mongodb+srv://tomas:123@cluster0.uyrfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

global.client = require('./api/models/clientModel');
const routes = require('./api/routes/clientsRoutes');
const port = process.env.PORT || 3000;
const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Client API",
      description: "Clients API Information",
      contact: {
        name: "Tomas Cambala"
      },
      servers: ["http://localhost:3000"]
    }
  },
  apis: ["server.js"]
};



const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},(e)=>{
  console.log("connected to DB")
});

 /**
 * @swagger
 * /clients:
 *  get:
 *    description: Use to request all clients
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 * @swagger
 * /clients/{clientId}:
 *  put:
 *   summary: update client
 *   description: update client
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: path
 *      name: client
 *      schema:
 *       type: string
 *      required: true
 *      description: id of the client
 *    - in: body
 *      name: body
 *      required: true
 *      description: object
 *      properties:
 *        name:
 *          type: string
 *        phone:
 *          type: string
 *        email:
 *          type: string
 *        providers:
 *          type: object
 *          properties:
 *            id:
 *              type: string
 *   responses:
 *    200:
 *     description: success
 */


 /**
 * @swagger
 * /clients/{clientId}:
 *  delete:
 *   summary: delete client
 *   description: delete client via clientId
 *   parameters:
 *    - in: path
 *      name: clientId
 *      schema:
 *       type: string
 *      required: true
 *      description: id of the client
 *   responses:
 *    200:
 *     description: success
 */
routes(app);

app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server is running on ${port}`);
