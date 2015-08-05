var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/users', users);
app.use('/canvas', function (req, res, next) {
    res.render('canvas', {});
});

app.use('/swiper', function (req, res, next) {
    res.render('swiper', {});
});

app.use('/blur', function (req, res, next) {
    res.render('blur', {});
});

app.use('/route', function (req, res, next) {
    res.render('route', {});
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    console.log('error message add !!!')
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            status: res.statusCode,
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        status: res.statusCode,
        message: err.message,
        error: {}
    });
});


module.exports = app;
