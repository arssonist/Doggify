const express = require('express'),
    router = express.Router(),
// import from from controller
    mainController = require('./controllers/main.controller'),
    dogsController = require('./controllers/dogs.controller')


module.exports = router;

// input function from controller
router.get('/',  mainController.showHome)


router.get('/dogs/seed', dogsController.seedDogs)


router.get('/dogs', dogsController.showDogs)
router.get('/dogs/:slug', dogsController.showSingleDog)
//url example => dogs
// router.get('dogs', )
