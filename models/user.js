const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        dropDups:true,
        min: 6,
        max: 20
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 20
    },
    email: {
        type: String,
        require: true,
        unique: true,
        dropDups:true
    }
})

module.exports = mongoose.Model('users', userSchema);