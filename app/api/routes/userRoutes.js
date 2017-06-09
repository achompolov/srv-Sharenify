module.exports = function(app) {

  var userController = require('../controllers/userController')

  // User Routes
  app.route('/users')
    .get(userController.listUsers)
    .post(userController.createUser)

  app.route('/users/:userId')
    .put(userController.updateUser)
    .delete(userController.deleteUser)
}
