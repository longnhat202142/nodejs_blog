const express = require('express');

const router = express.Router();

const newsController = require('../app/controllers/NewController');

router.use('/:slug', newsController.show);

router.use('/news', newsController.index);

module.exports = router;
