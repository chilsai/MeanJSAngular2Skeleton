var User        = require('../user/user-model'); // get the mongoose User model
//var jwt         = require('jwt-simple');
var jwt         = require('jsonwebtoken');
var config      = require('../../../config/dbConfig');

module.exports.createUser = function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please Enter username and password'});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists'});
      }
      res.json({success: true, msg: 'Successful created new user'});
    });
  }
};

module.exports.login = function(req, res) {
  User.findOne({
    name: req.body.name
  }, function(err, user) {
    if (err) throw err;
 
    if (!user) {
      res.send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          //var token = jwt.encode(user, config.secret);
          var token = jwt.sign(user, config.secret, {
            expiresIn: 1440 // expires in 24 hours
          });
          // return the information including token as JSON
          res.json({success: true, token: token});
        } else {
          res.send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
};