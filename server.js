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
    mongoDB = 'mongodb://localhost:27017'
    // mongoDB = process.env.DB_URI;

/////////DB CONNNECT/ /////////
// DB_URI is added to the process
mongoose.connect(`${mongoDB}/doggify_local`)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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
app.use(require('./app/routes'));

//////////////////PORT///////////////////////
app.listen(port);
console.log(`App running on post ${port}`)
