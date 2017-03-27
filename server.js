////////////ENV VARIABLES//////////
require('dotenv').config();

//////DEPENDENCIES/////////
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressLayouts = require('express-ejs-layouts/'),
    port = process.env.PORT || 8080,
    request = require('request'),
    mongoose = require('mongoose')

app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());

//////////////SERVE STATIC//////////////
app.use(express.static(__dirname + '/public'))

/////////VIEW ENGINE//////////
app.set('view engine', 'ejs')
app.use(expressLayouts)

/////////DB CONNNECT/ /////////
// DB_URI is added to the process
mongoose.connect(process.env.DB_URI)

///////////////LOCALS- include by name//////////////////////
app.locals.appTitle = "Dogify"


/////////////ROUTES/////////////////
app.use(require('./app/routes'));

//////////////////PORT///////////////////////
app.listen(port);
console.log(`App running on post ${port}`)
