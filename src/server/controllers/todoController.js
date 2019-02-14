const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

function updateTodo(id, body, callback) {
  Todo.findById(id, (err, todo) => {
    if (err) {
      return callback(err);
    }
    todo.name = body.name || todo.name;
    todo.comments = body.comments || todo.comments
  })

}

exports.addTodo = async (req, res) => {
  console.log('req.body');
  console.log(req.body);
  var todo = new Todo(req.body);
  todo.save((err, todo) => {
    if (err) {
      console.log(`Error saving new todo: ${err} `);
    }
  })
  // req.flash('success', `Successfully Created ${todo.name}, please leave a review`);
  res.json(todo);
};

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
};

exports.editTodo = (req, res) => {

}
