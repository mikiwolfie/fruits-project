//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check you data entry. no name specified.."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  rating: 10,
  review: "Peaches are so yummy!"
});

 fruit.save();

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const blueberry = new Fruit({
  name: "blueberry",
  rating: 8,
  review: "good.. fruit"
});

blueberry.save();

Person.updateOne({name: "Houtaru"}, {favoriteFruit: blueberry}, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully updated the document");
  }
})

// const person = new Person ({
//   name: "Chitanda",
//   age: 16,
//   favoriteFruit: strawberry
// });
//
// person.save();

// const orange = new Fruit({
//   name: "Orange",
//   score: 10,
//   review: "Favorite fruit ever!"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 5,
//   review: "ok..? fruit"
// });
//
// const avocado = new Fruit({
//   name: "Avocado",
//   score: 9,
//   review: "Amazing fruit!"
// });
//
// // Fruit.insertMany([orange, banana, avocado], function(err){
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log("Succesfully saved all the fruits to fruitsDB");
// //   }
// // });

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

Fruit.updateOne( {_id: "5fff9b5918d86928a06758d7"}, {name: "Grape"}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Succesfully updated the document.");
  }
});


// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits)
//     callback(fruits);
//   });
// }
//
// Fruit.deleteOne({name: "Grape"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the document");
//   }
// });

// Person.deleteMany({name: "Houtaru"}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted all the document");
//   }
// });
