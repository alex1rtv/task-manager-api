const express = require('express');
require('./db/mongoose.js');

const User = require('./model/user');
const Task = require('./model/task');
const { request, response } = require('express');

const app = express();
app.use(express.json());

// for heroku server
const port = process.env.PORT || 3000;

// REST API - Create User
app.post('/users', (request, response) => {
    // console.log(req.body); 
    // res.send('testing');
    const user = new User(request.body);
    user.save().then(() => {
        response.status(201).send(user);
    }).catch((err) => {
        console.log("Error: " + err);
        response.status(400);
        response.send(err);
    });
});

// REST API - Create Task
app.post('/tasks', (request, response) => {
    const task = new Task(request.body);
    task.save().then(() => {
        response.status(201).send(task);
    }).catch((err) => {
        console.log("Error: " + err);
        response.status(400).send(err);
    });
});

// REST API - Read all users
app.get('/users', (request, response) => {
    User.find({}).then((users) => {
        response.send(users);
    }).catch(() => {
        console.log("Error: " + err);
        response.status(500).send();
    });
});

// REST API - Read one user
app.get('/users/:id', (request, response) => {
    const _id = request.params.id;
    User.findById(_id).then((user) => {
        if (!user) {
            return response.status(404).send();
        }
        response.send(user);
    }).catch(() => {
        console.log("Error: " + err);
        response.status(500).send();
    });
});


// REST API - Read all tasts
app.get('/tasks', (request, response) => {
    Task.find({}).then((tasks) => {
        response.send(tasks);
    }).catch(() => {
        console.log("Error: " + err);
        response.status(500).send();
    });
});

// REST API - Read one task
app.get('/tasks/:id', (request, response) => {
    const _id = request.params.id;
    Task.findById(_id).then((task) => {
        if (!task) {
            return response.status(404).send();
        }
        response.send(task);
    }).catch(() => {
        console.log("Error: " + err);
        response.status(500).send();
    });
});






app.listen(port, () => { console.log('Server is up on port ' + port)});

// {
//     "name" : "Rose",
//     "email" : "rose@example.com",
//     "password" : "qwertyu"
// }

// {
//     "description" : "study psychology",
//     "completed" : false
// }