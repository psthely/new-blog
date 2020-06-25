var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');

var indexRouter = require('./routes/index');
var genericRouter = require('./routes/generic');
var elementsRouter = require('./routes/elements');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use('/', indexRouter);
app.use('/generic', genericRouter);
app.use('/elements', elementsRouter);

module.exports = app;
