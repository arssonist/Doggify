////////////ENV VARIABLES//////////
require('dotenv').config();

//////DEPENDENCIES/////////
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressLayouts = require('express-ejs-layouts/'),
    port = process.env.PORT || 8080,
    request = require('request'),
    mongoose = require('mongoose'),
   //'mongodb://localhost:27017/test_1'
    mongoDB = process.env.DB_URI;


/////////DB CONNNECT/ /////////
// DB_URI is added to the process
mongoose.connect(mongoDB)
console.log('db connected')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// setTimeout(function(){
//   console.log(mongoose.connection.readyState);
//
// }, 1000);

app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());

//////////////SERVE STATIC//////////////
app.use(express.static(__dirname + '/public'))

/////////VIEW ENGINE//////////
app.set('view engine', 'ejs')
app.use(expressLayouts)



///////////////LOCALS- include by name//////////////////////
app.locals.appTitle = "Dogify"


/////////////ROUTES/////////////////
app.use(require('./app/routes/dog_routes.js'));

//////////////////PORT///////////////////////
app.listen(port);
console.log(`App running on post ${port}`)
