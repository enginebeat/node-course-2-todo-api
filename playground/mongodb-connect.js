//const MongoClient = require('mongodb').MongoClient;
//using Deconstructing
const {MongoClient, ObjectID} = require('mongodb');
//creating obj id using mongodb builtin object. not necessary really
//unless you want to
//var obj = new ObjectID();
//console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log('Connected to Mongo server on port 27017');
  // db.collection('Todos').insertOne(
  //   {
  //   text: 'Something to do',
  //   completed: false
  //   },
  //   (err, result) => {
  //     if(err){
  //       return console.log("Unable to insert todo", err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   });

  // db.collection('Users').insertOne(
  //   {
  //   name: 'Luis Moreira',
  //   age: 42,
  //   location: "Reading,UK"
  //   },
  //   (err, result) => {
  //     if(err){
  //       return console.log("Unable to insert todo", err);
  //     }
  //     //console.log(JSON.stringify(result.ops, undefined, 2));
  //     console.log(result.ops[0]._id.getTimestamp());
  //
  //   });
  db.close();
});
