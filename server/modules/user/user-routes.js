var express = require('express');
var router = express.Router();
var passport = require('passport');

var userController = require('./user-controller');

//Get user list
router.get('/', userController.getUserList);


module.exports = router;