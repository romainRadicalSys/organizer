const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

exports.addTodo = async (req, res) => {
  const todo = await new Todo(req.body).save();
  // req.flash('success', `Successfully Created ${todo.name}, please leave a review`);
  res.json(todo);
};

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
};
