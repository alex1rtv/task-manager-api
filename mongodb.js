// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectId } = require('mongodb');

const connURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

const id = new ObjectId();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connURL, { useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log("Unable connect to DB");
    }
    console.log("Connected to DB");

    const db = client.db(dbName);

    // 8. Creating Documents

    /*
    db.collection('users').insertOne({
        name: 'Bob',
        age: 25
    }, (error, result) => {
        if (error) {
            return console.log("Unable to insert user");
        }
        console.log(result);
    });
    
    try {
        db.collection('users').insertMany( [
           { name: "Sam", age: 15 },
           { name: "Kat", age: 20 },
           { namme: "Rose" , age: 30 }
        ] );
     } catch (e) {
        console.log(e);
     }
     
     db.collection('tasks').insertMany([
         {description: "buy a bread", completed: false},
         {description: "take book from library", completed: true},
         {description: "call Joe", completed: false}
     ], (error, result) => {
        if (error) {
            return console.log("Unable to insert users");
        }
        console.log(result);
     })
     
     /*
     
     // 9. Querying Documents

     db.collection('users').findOne({ name: "Sam" }, (error, user) => {
         if (error) {
             return console.log("Unable to fetch a user");
         }
         console.log(user);
     });

     console.log("=======================================================");

     // by ID

     db.collection('users').findOne({ _id: new ObjectId("61f5910176fb48c5f550299d") }, (error, user) => {
        if (error) {
            return console.log("Unable to fetch a user");
        }
        console.log(user);
    });

    db.collection('users').find({ age: 25 }).toArray((error, users) => {
        if (error) {
            return console.log("Unable to fetch a user");
        }
        console.log(users);
    });

    console.log("Finding tasks");

    // find last task
    db.collection('tasks').findOne({ _id: new ObjectId("61f5985a771876f9bd7d14a0") }, (error, task) => {
        if (error) {
            return console.log("Unable to fetch a task");
        }
        console.log(task);
    });

    // find all uncompleted tasks
    db.collection('tasks').find({ "completed": false }).count((error, count) => {
        if (error) {
            return console.log("Unable to fetch tasks");
        }
        console.log(`There are ${count} uncompleted tasks`);
    });

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log("Unable to fetch tasks");
        }
        console.log(tasks);
    });

    */

    // 3. Updating Documnets

    //ObjectId("61f59096ca9553d20270102b")
/*
    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectId("61f59096ca9553d20880102b")
    }, {
        $set: {
            name: 'Mike',
            age: 32
        }
    });

    updatePromise
    .then((result) => {
        console.log("Number of objects updated: " + result.modifiedCount);
    })
    .catch((error) => {
        console.log(error);        
    });

    db.collection('users').updateOne({
            name: "Mike"
        }, { 
            $inc: {            
                age: -5
            }
        }
    );
*/
    // updateMany
/*
    db.collection('tasks').updateMany({completed: false},
        {$set: { completed: true}})
    .then((res) => console.log("Total updates: " + res.modifiedCount))
    .catch((err) => console.log(err));
*/

    // delete documents

    // db.collection('users').deleteOne({ namme: 'Rose'});

    

});