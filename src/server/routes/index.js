const express = require('express');
const router = express.Router();
const path = require('path');
const todoController = require('../controllers/todoController');
//const { catchErrors } = require('../handlers/errorHandlers');
// Do work here
// router.get('/', function(req, res) {
//   // res.send('ouio');
//   //res.sendFile(path.join(__dirname, '/app', 'index.html')); // The application page with local lib references
//   res.sendFile(path.join(__dirname, '../../', 'index.html')); // The application page with
// });
router.get('/getTodos', todoController.getTodos);
router.post('/addTodo', todoController.addTodo);
// router.post('/add', catchErrors(storeController.createStore));
// router.post('/add/:id', catchErrors(storeController.updateStore));
// router.get('/stores/:id/edit', catchErrors(storeController.editStore));

module.exports = router;
