var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
	name: String,
  location: String,
	status: String
});

module.exports = mongoose.model('Todo', TodoSchema);
