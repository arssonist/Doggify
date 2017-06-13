const Dog = require("../models/Dog.js"),
      mongoose = require('mongoose'),
      mongoDB = process.env.DB_URI;



module.exports = {
//show all USERS
// -----DB setup for local DB
//   showDogs: (req,res) => {
//     console.log('getting all dogs');
//     db.Dog.find({})
//     .exec(function(err, dogs) {
//       if(err) {
//         res.send('error occured')
//       } else {
//         console.log(dogs);
//     // res.render("pages/dogs", {dogs:dogs, title:"All Dogs"})
//     res.json(dogs)
//       }
//     });
// }

  showDogs: (req,res) => {
      const dogs = [
        {
          name:"Fluffy", breed:"ChowChow", description:"4 year old Chow. Really, really fluffy."
        },
        {
          name:"Buddy", breed:"White Lab", description:"A friendly 6 year old white lab mix. Loves playing ball"
          },
          {
            name: "Derbis", breed:"Schmerbis", description:"A real Schmerbis Derbis"
          }
          ];

    console.log('getting all dogs');
    res.render("pages/dogsViews/dogs", {dogs:dogs, title:"All Dogs"})
  },

//url example => dogs
//
// // Show single User
  showSingleDog: (req,res) => {
    const dog =
      {
        name:"Fluffy", breed:"ChowChow", slug:'fluffy', description:"4 year old Chow. Really, really fluffy."
      }
    res.render("pages/dogsViews/dog", {dog:dog, title:dog.name})


  },

  seedDogs: (req,res) => {
  // mongoose.createConnection(mongoDB)
    //create events
    const dogs = [
      {
        name:"Fluffy", breed:"ChowChow", description:"4 year old Chow. Really, really fluffy."
      },
      {
        name:"Buddy", breed:"White Lab", description:"A friendly 6 year old white lab mix. Loves playing ball"
    },
    {
      name: "Derbis", breed:"Schmerbis", description:"A real Schmerbis Derbis"
    }
    ];
    // for (var i = 0; i < dogs.length; i++) {
    //   dogs[i].save(function(err, result){
    //     done++
    //     if (done === d.length){
    //       exit();
    //     }
    //   })
    // }

    // function exit(){
    //   mongoose.disconnect()
    // }
    Dog.remove({}, () => {
    for (dog of dogs){
      var newDog = new Dog(dog);
      newDog.save()
    }
  })
    // if (err){
    //   res.send(err)
    // }else {
    //   res.send("DB seeded")
    // }
},
  // # GET /dogs/new
  newDog:(req,res) => {
      console.log('new dog route')
      res.render('pages/dogsViews/newdog',{
          title:"Add a New dog"
      })
  },
  createDog:(req,res) => {
  //     console.log('need Dog Added')
  //     res.render('pages/dogsViews/newdog',{
  //         title:"Add a New dog"
  //     })
  //     Dog.create({ name: req.body.new-dog-name }, function (err, data) {
  //         if (err) return handleError(err);
  // // saved!
  // console.log)(data)
     console.log(req.body.newdogname)
     res.send(req.body.newdogname)
     return
    // res.send(req.body.new-dog-name)
  }
}
