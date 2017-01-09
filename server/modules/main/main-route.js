var express = require('express');
var router = express.Router();

var mainController = require('./main-controller');

router.get('/', mainController.getIndexFiles);

module.exports = router;