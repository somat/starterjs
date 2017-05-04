var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var csrf = require('csurf');
var exphbs = require('express-handlebars');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var config = require('./config/config');
var urlhelper = require('./helpers/urlhelper');
var validator = require('express-validator');
var tplhelper = require('./helpers/template');

var session = require('express-session');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(config.db_string);
var MongoStore = require('connect-mongo')(session);

var User = require('./app/models/user');
var app = express();

handlebars = exphbs.create({
  defaultLayout: 'main',
  extname: '.html',
  partialsDir: [
    'views/partials'
  ],
  helpers: tplhelper
});

app.engine('html', handlebars.engine);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(validator());

app.use(session({
  secret: config.session_secret,
  resave: false,
  rolling: true,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: {maxAge: 900000}
}));

app.use(express.static(path.join(__dirname, 'public')));

// Passport config
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Security
app.use(helmet());
app.use(csrf());

// User middleware
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

// URL Middleware
app.use(function(req, res, next) {
  res.locals.url = urlhelper;
  res.locals.path = req.path;
  next();
});

// App Router
app.use(require('./app/router'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
