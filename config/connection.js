// Requirement for DB
const mongoose = require('mongoose');

//Set up Mongoose on MongoDB servers
mongoose.connect('mongodb://127.0.0.1:27017/socialnetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;