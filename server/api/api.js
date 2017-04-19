'use strict'

const express = require('express');
const api = express.Router();

api.get('/heartbeat', function (req, res, next) {
  res.send("it's alive!");
});

module.exports = api;