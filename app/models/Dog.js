// 1 create a Schema
// 2 create a model
// 3 export the model

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  const dogSchema = new Schema({
   name: String,
   description: String,
   breed:String,
   DOB:Date,
   age:Number,
   breeder:String, //breeder.id
   slug: {
     type: String,
     unique: true
    }
  });


   const dogModel = mongoose.model('Dog', dogSchema)

   dogSchema
   .virtual('url')
   .get(function () {
     return '/dog/' + this._id;
   });


   module.exports = dogModel;


   dogSchema.pre('save', function(next){
     this.slug = slugify(this.name);
     next();
   })

// });

// MIDDLEWARE////////////
// use pre to call MIDDLEWARE

function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
