
const express = require('express');
const Task = require('../models/task');

const router = new express.Router();

// REST API - Create Task
router.post('/tasks', async (request, response) => {
    const task = new Task(request.body);
    try {
        await task.save();
        response.status(201).send(task);
    } catch(err) {
        response.status(400).send(err);
    }  

    // task.save().then(() => {
    //     response.status(201).send(task);
    // }).catch((err) => {
    //     console.log("Error: " + err);
    //     response.status(400).send(err);
    // });
});



// REST API - Read all tasts
router.get('/tasks', async (request, response) => {
    try {
        const tasks = await Task.find({});
        response.status(200).send(tasks);
    } catch(err) {
        response.status(500).send(err);
    }  

    // Task.find({}).then((tasks) => {
    //     response.send(tasks);
    // }).catch(() => {
    //     console.log("Error: " + err);
    //     response.status(500).send();
    // });
});

// REST API - Read one task
router.get('/tasks/:id', async (request, response) => {
    const _id = request.params.id;
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return response.status(404).send();
        }
        response.send(task);
    } catch(err) {
        console.log("Error: " + err);
        response.status(500).send();
    };

    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return response.status(404).send();
    //     }
    //     response.send(task);
    // }).catch(() => {
    //     console.log("Error: " + err);
    //     response.status(500).send();
    // });
});


// update task by id
router.patch('/tasks/:id', async (request, response) => {
    const updates = Object.keys(request.body);
    const allowedUpdates = ['description', 'completed'];

    // all props to update must be in allowed array
    const isValidOperation = updates.every((item) => {
        return allowedUpdates.includes(item);
    });

    if (!isValidOperation) {
        return response.status(400).send( {error: 'Invalid updates'} );
    }

    try {
        const task = await Task.findByIdAndUpdate(request.params.id, request.body, {
            new: true,
            runValidators: true
        });

        if (!task) {
            return response.status(404).send();
        }
        response.send(task);
    } catch (err) {
        response.status(400).send(err); 
    }
});



// delete task by id
router.delete('/tasks/:id', async (request, response) => {
    try {
        const task = await Task.findByIdAndDelete(request.params.id);
        if (!task) {
            return response.status(404).send();
        }
        response.send(task);
    } catch (err) {
        response.status(500).send(); 
    }
});

module.exports = router;

