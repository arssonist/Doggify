const Breeder = require("../models/Breeder.model.js"),
      mongoose = require('mongoose'),
      mongoDB = process.env.DB_URI;

module.exports = {
    showBreeders: (req,res) => {
        console.log('show all breeders')
        // res.render('pages/breederviews/breeders', {title:'breeders page'})
    },
    test: (req,res) => {
        console.log("TESTST")
    },
    showHome: function(req,res) {
      res.render('pages/home', { title: 'Dogify'});
    }
}
