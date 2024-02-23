const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: { 
         type: String,
    },
    number: {
         type: Number,
    },
    email: {
         type: String,
         required: true 
    },
    password: {
         type: String, 
         required: true 
    },
    conform_password: {
        type: String, 
    },
    address: {
        type: String,
    },
   
})

const User = mongoose.model('users', Schema)
module.exports = User;