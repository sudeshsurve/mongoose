const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
name :String,
age:Number ,
email:String,
password : String
},{versionKey:false})
module.exports = mongoose.model('user' , userSchema)