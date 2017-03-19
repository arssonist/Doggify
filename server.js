var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    expressLayouts = require('express-ejs-layouts/'),
    port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.locals.appTitle = "Dogify"

app.use(require('./app/routes'));


app.listen(port);
console.log(`App running on post ${port}`)
