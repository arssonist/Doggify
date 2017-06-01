
const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  const breederSchema = new Schema({
   name: String,
   description: String,
   location:String,
   breeder_of:String, //dog.id
   // slug: {
   //   type: String,
   //   unique: true
   //  }
  });


   const breederModel = mongoose.model('Breeder', breederSchema)

   module.exports = breederModel;
