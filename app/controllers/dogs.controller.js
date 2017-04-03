const Dog = require("../models/Dog.js"),
      mongoose = require('mongoose')
// -works by returing a function that gives direction what to do with response, and an object showing what to display based on data.

module.exports = {
//show all USERS
  showDogs: (req,res) => {
  res.render("pages/dogs", {dogs:dogs, title:"All Dogs"});
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
  mongoose.createConnection('mongodb://localhost:27017/doggify_local')
    //create events
    const dogs = [
      new Dog({
        name:"Fluffy", breed:"ChowChow", description:"4 year old Chow. Really, really fluffy."
      }),
      new Dog({
        name:"Buddy", breed:"White Lab", description:"A friendly 6 year old white lab mix. Loves playing ball"
    }),
      new Dog({
      name: "Derbis", breed:"Schmerbis", description:"A real Schmerbis Derbis"
    })
    ];
    var done = 0
    for (var i = 0; i < dogs.length; i++) {
      dogs[i].save(function(err, result){
        done++
        if (done === products.length){
          exit();
        }
      })
    }
    function exit(){
      mongoose.disconnect()
    }
    res.send("DB seeded" + res)
  }
}
