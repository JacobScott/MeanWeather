// WEATHER APP

// Requires
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var jquery = require('jquery');
var querystring = require('querystring');
var request = require('request');
var fs = require('fs');

// App setup
var app = express();
app.set("view engine", "ejs");
var viewPath = path.join(__dirname,'views');
app.set('views', viewPath);

// Allow clients access to public asssets folder on front-end
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Globals
var gbl = {
    appName: 'JSM - MeanWeather',
    request: require('request'),
    querystring: require('querystring'),
    config: require('./config')
}

// Require routes
var routes = require('./routes')(app, gbl);

// Export admin module
module.exports = app;