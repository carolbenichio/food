const express = require('express');

const cityRouter = require('./modules/city/routes');

const newError = require('./error/error');

const router = express.Router({ mergeParams: true });

router.use('/', cityRouter);

router.use(newError);

module.exports = router;
