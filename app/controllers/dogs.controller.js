const Dog = require("../models/Dog")

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

  seedEvents: (req,res) => {
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
    //use event model to save
    for(dog of dogs){
      var newDog = new Dog(dog);
      newDog.save()
    }
    res.send('DB seeded')
  }
}
