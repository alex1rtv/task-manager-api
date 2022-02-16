const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});


// create new user

// const me = new User({
//     name: 'Andrew', 
//     password: "pass123",
//     age: 30,
//     email: "andrew234@yahoo.com"
// });

// save instanc to database
// me.save().then((res) => console.log("Result: " + res)).catch((err) => console.log("Error: " + err));


// create new task

// const task = new Task({
//     description: ' return Book to liBrary  ', 
//     /*completed: false */
// });

// // save instanc to database
// task.save().then((res) => console.log("Result: " + res)).catch((err) => console.log("Error: " + err));

