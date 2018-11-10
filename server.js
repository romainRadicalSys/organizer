const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
const routes = require('./src/server/routes/index');
//const errorHandlers = require('./src/server/handlers/errorHandlers');

// create our Express app
const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views')); // this is the folder where we keep our pug files
// app.set('view engine', 'pug'); // we use the engine pug, mustache or EJS work great too

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist/organize')));
//app.use(express.static(path.join(__dirname, 'src/')));

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(
  session({
    secret: 'snikers', //process.env.SECRET,
    key: '1234', //process.env.KEY,
    resave: false,
    saveUninitialized: false,
    todo: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

// // Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());

// // The flash middleware let's us use req.flash('error', 'Shit!'), which will then pass that message to the next page the user requests
app.use(flash());

// promisify some callback based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

// After allllll that above middleware, we finally handle our own routes!
app.use('/api', routes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/organize', 'index.html')); // The application page with
  //res.sendFile(path.join(__dirname, '/src/', 'index.html')); // The application page with
});

// If that above routes didnt work, we 404 them and forward to error handler
//app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
//app.use(errorHandlers.flashValidationErrors);

// // Otherwise this was a really bad error we didn't expect! Shoot eh
// if (app.get('env') === 'development') {
//   /* Development Error Handler - Prints stack trace */
//   app.use(errorHandlers.developmentErrors);
// // }

// // production error handler
// app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;
