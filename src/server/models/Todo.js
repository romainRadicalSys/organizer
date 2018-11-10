const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!'
  },
  //slug: String,
  label: [String],
  owner: String,
  //dueDate: Date,
  archived: Boolean,
  comments: {
    type: String,
    trim: true
  },
  done: Boolean
  //category: String,
  //page: String
});

module.exports = mongoose.model('Todo', TodoSchema);
