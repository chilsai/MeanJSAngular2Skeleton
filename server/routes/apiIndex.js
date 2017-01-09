var express = require('express');
var router  = express.Router();

var tokenAuthorize = require('./authorize');

// Routing to Specific Modules
router.use('/auth/user', require('../modules/userAuth/userAuth-routes.js') );

router.use('/users', require('../modules/user/user-routes.js') );

// All the Routes used above this does not have Token Authorization
// All the API outes after User Authentication will be authenticated with Token in the Header
router.use(tokenAuthorize.authorize);

// Routing to Specific Modules
//router.use('/users', require('../modules/user/user-routes.js') );

module.exports = router;