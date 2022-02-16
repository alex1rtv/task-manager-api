const express = require('express');
require('./db/mongoose.js');

const User = require('./models/user');
const Task = require('./models/task');

// const { request, response } = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


// for heroku server
const port = process.env.PORT || 3000;



// -----------------------------  //

app.listen(port, () => { console.log('Server is up on port ' + port)});

// {
//     "name" : "Rose",
//     "email" : "rose@example.com",
//     "password" : "qwertyu",
//     "age" : 33 
// }

// {
//     "description" : "study psychology",
//     "completed" : false
// }


const bcrypt = require('bcrypt');

const func = async () => {
    const password = "hello123";
    const hash = await bcrypt.hash(password, 8);

    const isMatch1 = await bcrypt.compare('hello1234', hash);
    const isMatch2 = await bcrypt.compare('hello123', hash);
    console.log(isMatch1, isMatch2);
}

func();