const express = require('express'),
    router = express.Router(),
// import from from controller
    mainController = require('./controllers/main.controller'),
    dogsController = require('./controllers/dogs.controller')


module.exports = router;

// input function from controller
router.get('/', mainController.showHome)
router.get('/dogs', dogsController.showDogs)
