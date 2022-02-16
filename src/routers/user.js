
const express = require('express');
const User = require('../models/user');

const router = new express.Router();

// router.get('/test', (request, response) => {
//     response.send("Message from my router");
// });

// REST API - Create User
router.post('/users', async (request, response) => {
    // console.log(request.body); 
    // res.send('testing');
    const user = new User(request.body);
    try {
        await user.save();
        response.status(201).send(user);
    } catch(err) {
        response.status(400).send(err);
    }    

    // user.save().then(() => {
    //     response.status(201).send(user);
    // }).catch((err) => {
    //     console.log("Error: " + err);
    //     response.status(400);
    //     response.send(err);
    // });
});


// REST API - Read all users
router.get('/users', async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).send(users);
    } catch(err) {
        response.status(500).send(err);
    }  

    // User.find({}).then((users) => {
    //     response.send(users);
    // }).catch(() => {
    //     console.log("Error: " + err);
    //     response.status(500).send();
    // });
});

// REST API - Read one user
router.get('/users/:id', async (request, response) => {
    const _id = request.params.id;
    try {
        const user = await User.findById(_id);
        if (!user) {
            return response.status(404).send();
        }
        response.send(user);
    } catch(err) {
        console.log("Error: " + err);
        response.status(500).send();
    };

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return response.status(404).send();
    //     }
    //     response.send(user);
    // }).catch(() => {
    //     console.log("Error: " + err);
    //     response.status(500).send();
    // });
});


// update user by id
router.patch('/users/:id', async (request, response) => {
    const updates = Object.keys(request.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];

    // all props to update must be in allowed array
    const isValidOperation = updates.every((item) => {
        return allowedUpdates.includes(item);
    });

    if (!isValidOperation) {
        return response.status(400).send( {error: 'Invalid updates'} );
    }

    try {
        const user = await User.findByIdAndUpdate(request.params.id, request.body, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return response.status(404).send();
        }
        response.send(user);
    } catch (err) {
        response.status(400).send(err); 
    }
});


// delete user by id
router.delete('/users/:id', async (request, response) => {
    try {
        const user = await User.findByIdAndDelete(request.params.id);
        if (!user) {
            return response.status(404).send();
        }
        response.send(user);
    } catch (err) {
        response.status(500).send(); 
    }
});

module.exports = router;