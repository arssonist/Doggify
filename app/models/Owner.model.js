
const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const ownerSchema = new Schema({
   first_name:String
   last_name: String,
   breedsOfInterest:String,
   owner_of:String, //dog.id
   // slug: {
   //   type: String,
   //   unique: true
   //  }
  });
  // Virtual for author's full name
    ownerSchema
    .virtual('name')
    .get(function () {
      return this.last_name + ', ' + this.first_name;
    });

    // Virtual for author's URL
    AuthorSchema
    .virtual('url')
    .get(function () {
      return '/dogs/breeder/' + this._id;
    });


   const ownerModel = mongoose.model('Owner', ownerSchema)

   module.exports = ownerModel;
