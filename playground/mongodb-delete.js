const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("Unable to connect to MongoDB server");
  }
  console.log('Connected to Mongo server on port 27017');

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Luis'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Users').deleteOne({_id: new ObjectID(new ObjectID("59bee7b7f9197789fa24a8ff"))}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({age: 42}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });


  //db.close();
});
