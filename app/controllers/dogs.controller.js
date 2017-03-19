module.exports = {


//show all USERS
  showDogs: (req,res) => {
    const dogs = [
      {
        name:"Fluffy", breed:"ChowChow", slug:"fluffy", description:"4 year old Chow. Really, really fluffy."
      },
      {
        name:"Buddy", breed:"White Lab", slug:"buddy", description:"A friendly 6 year old white lab mix. Loves playing ball"
    },
    {
      name: "Derbis", breed:"Schmerbis",slug:"derbis", description:"A real Schmerbis Derbis"
    }
  ];
  res.render("pages/dogs", {dogs: dogs, title:"All Dogs"});
  }
}

// Show single User
