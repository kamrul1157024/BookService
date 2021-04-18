const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        dropDups:true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        dropDups:true
    }
})

module.exports = mongoose.model('users', userSchema);