const express = require('express');
const rescue = require('express-rescue');
const getCity = require('./controllers/getCity');

const cityRouter = express.Router();

cityRouter.get('/:city', rescue(getCity));

module.exports = cityRouter;
