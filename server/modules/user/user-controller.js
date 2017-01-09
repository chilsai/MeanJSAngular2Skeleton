var User        = require('../user/user-model'); // get the mongoose User model
//var jwt         = require('jwt-simple');
var jwt         = require('jsonwebtoken');
var config      = require('../../../config/dbConfig');

module.exports.getUserList = function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
};
