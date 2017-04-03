// 1 create a Schema
// 2 create a model
// 3 export the model

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

  const dogSchema = new Schema({
   name: String,
   slug: {
     type: String,
     unique: true
   },
   description: String
  });


   const dogModel = mongoose.model('Dog', dogSchema)

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
