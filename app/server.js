var express    = require('express')
var logger     = require('morgan')

var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 8000;
