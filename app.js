var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');

var indexRouter = require('./routes/index');
var genericRouter = require('./routes/generic');
var elementsRouter = require('./routes/elements');
var htmlCssRouter = require('./routes/htmlCss.js');

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
app.use('/html-css', htmlCssRouter);

module.exports = app;
