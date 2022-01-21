const mongoose = require('mongoose');

const password = 'vVSS7bgtBpzDdiwt';

module.exports = () => {
    mongoose.connect(`mongodb+srv://user01:${password}@masai-evaluations.azpxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
};