var express = require('express');
var bodyParser = require('body-parser');
var path 	   = require('path');
var passport	= require('passport');
var mongoose   = require('mongoose');

var app = express();

// Get the App Configuration
var appConfig = require('./config/appConfig');
var dbConfig = require('./config/dbConfig'); // Get the DB Config Details 

// Routes
var Routes     = require('./server/routes/index');
var apiRoutes     = require('./server/routes/apiIndex');

// Use the passport package in our application
app.use(passport.initialize());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views',path.join(__dirname,'client/views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use('/', Routes);
app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, 'client')));

//Connect to MongoDB database
mongoose.connect(dbConfig.url(),function(err){
	if(err){
		console.log('Error connecting to DB'+err);
	}else{
		console.log('Connected to MongoDB Data Base nodeAuth');
	}			
});

// pass passport for configuration
require('./config/passport')(passport);

app.listen(appConfig.port,function(){
    console.log('Server is listining to Port : '+ appConfig.port);
});


