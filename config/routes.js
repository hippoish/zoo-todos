var express = require('express');
var router = express.Router();

var todosController = require('../controllers/todos_controller')

router.route('/todos')
  .get()
  .post();

router.route('/todos/:id')
  .get()
  .patch()
  .delete();

module.exports = router;
