const Dog = require("../models/Dog.js"),
      mongoose = require('mongoose'),
      mongoDB = process.env.DB_URI;
// -works by returing a function that gives direction what to do with response, and an object showing what to display based on data.



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
    res.render("pages/dogs", {dogs:dogs, title:"All Dogs"})
  },

//url example => dogs
//
// // Show single User
  showSingleDog: (req,res) => {
    const dog =
      {
        name:"Fluffy", breed:"ChowChow", slug:'fluffy', description:"4 year old Chow. Really, really fluffy."
      }
    res.render("pages/dog", {dog:dog, title:dog.name})


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
  }
}
