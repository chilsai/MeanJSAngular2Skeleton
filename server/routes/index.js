var express = require('express');
var router = express.Router();


// Routing to Specific Modules
router.use('/', require('../modules/main/main-route.js') );

module.exports = router;