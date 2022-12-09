const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String,
    City: String,
    State: String,
    Zip: Number
}, { versionKey: false })

module.exports = mongoose.model('user', userSchema)