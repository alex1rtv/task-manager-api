require('../src/db/mongoose');
const Task = require('../src/model/task');

Task.deleteOne({ _id: '61fd36213a018a3a18b8fae5'})
.then(deleted => {
    console.log(deleted);
    return Task.countDocuments({completed: false});
}).then(count => console.log("There are " + count + " incompleted tasks"));


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    console.log("Deleted: ");
    console.log(task);
    const count = await Task.countDocuments({ completed: false });
    return count;
};

deleteTaskAndCount('61fd2f40c918c129fc46fb19')
.then(count => console.log(`There are ${count} tasks to complete`));