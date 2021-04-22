const clientsController = require('../controllers/clientController');

module.exports = app => {
  app
    .route('/clients')
    .get(clientsController.list_all_clientIds)
    .post(clientsController.create_a_client);

  app
    .route('/clients/:clientId')
    .get(clientsController.read_a_client)
    .put(clientsController.update_a_client)
    .delete(clientsController.delete_a_client);
};