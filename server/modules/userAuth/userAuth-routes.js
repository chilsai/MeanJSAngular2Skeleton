var express = require('express');
var router = express.Router();

var userAuthController = require('./userAuth-controller');

//router.get('/', userAuthController.GetUserDetails);

//Signup
router.post('/register', userAuthController.createUser);

//Signin
router.post('/login', userAuthController.login);

module.exports = router;