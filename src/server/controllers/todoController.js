const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');



exports.addTodo = async (req, res) => {
  console.log('req.body');
  console.log(req.body);
  var todo = new Todo(req.body);



  // const todo = await new Todo(req.body).save();

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
