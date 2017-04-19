'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = 1337;

const rootPath = path.join(__dirname, '..');
const publicPath = path.join(rootPath, 'public');
const indexPath = path.join(publicPath, 'index.html');

// logging middleware
app.use(morgan('dev')); 

// body-parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static middleware
app.use(express.static(publicPath));

// api routes
app.use('/api', require('./api/api.js'));

// serve index.html
app.get('/', function (req, res, next) {
  res.sendFile(indexPath);
});

// catches all other GET requests
app.get('/*', function (req, res, next) {
  res.redirect('/');
});

// error-handling middleware
app.use(function (err, req, res, next) {
  console.error('Error handling middleware caught:', err);

  res.sendStatus(err.status || 404);
});

// launch the server on PORT
app.listen(PORT, function () {
  console.log(`Express server listening on port ${ PORT }`);
});

// export for testing
module.exports = app;