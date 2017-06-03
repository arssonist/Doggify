const express = require('express'),
    router = express.Router(),
// import from from controller
    mainController = require('../controllers/main.controller'),
    dogsController = require('../controllers/dogs.controller')


module.exports = router;


//sample seed route
router.get('/dogs/seed', dogsController.seedDogs)

//get all dogs
router.get('/dogs', dogsController.showDogs)

router.

//show single dog
router.get('/dogs/:slug', dogsController.showSingleDog)
//url example => dogs
// router.get('dogs', )
