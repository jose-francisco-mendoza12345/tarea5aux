var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mensajeRouter = require('./routes/mensaje');

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mensaje',mensajeRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var server = http.createServer(app);
var io = require('socket.io').listen(server);
var chatIoMethods = require('./routes/chat');

io.on('connection',chatIoMethods);

//puerto
server.listen(8000,()=>{
    console.log("corriendo en el puerto 8000");
});

module.exports = app;
