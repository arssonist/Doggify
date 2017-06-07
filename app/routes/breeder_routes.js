const express = require('express'),
    router = express.Router(),

    breederController = require('../controllers/breeders.controller'),
    mainController = require('../controllers/main.controller.js')

module.exports = router


router.get('/breeders', breederController.showBreeders)
// router.get('/breeders', showHome.mainController)
