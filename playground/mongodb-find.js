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
  // find() returns a corsor to the documents
  //toArray returns a promisse
  //find can have queries
  // db.collection('Todos').find({
  //   _id: new ObjectID('59be7cd4c75fc429e8814260')
  // }).toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  // });

  //using the count method to get number of documents in Todos.
  // db.collection('Todos').find().count().then((count) => {
  //     console.log(`Todos count: ${count}`);
  //   }, (err) => {
  //     console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({
    name: "Luis"
  }).toArray().then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
  });


  //db.close();
});
