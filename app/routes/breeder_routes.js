const express = require('express'),
    router = express.Router(),

    breederController = require('../controllers/breeders.controller'),
    mainController = require('../controllers/main.controller.js')

router.get('/breeders', showBreeders.breederController)
// router.get('/breeders', showHome.mainController)
