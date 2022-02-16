require('../src/db/mongoose');
const User = require('../src/model/user');

User.findByIdAndUpdate('61fd34502963ae3050d540b5', {
    age: 20
}).then(user => {
    console.log("Updated user: " + user);
    return User.countDocuments({age: 20});
}).then(count => console.log("Count: " + count));

const updateAgeAndCount = async (id, age) => {
    const result = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments( { age });
    return count;
};

let age = 20;
let id = '61fe2116332a5203fc86d0b8';
updateAgeAndCount(id, age)
.then(count => console.log(`There are ${count} users with age ${age}`));