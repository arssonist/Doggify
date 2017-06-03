const express = require('express'),
    router = express.Router(),
// import from from controller
    mainController = require('../controllers/main.controller')


module.exports = router;

// input function from controller
router.get('/',  mainController.showHome)
