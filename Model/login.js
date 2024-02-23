const mongoose = require('mongoose')

const Schema= new mongoose.Schema({
    username:{
        type:String,
         required:true
    },
    password: {
        type: String, 
        required: true 
   },
})
const Admin_Schema = mongoose.model('admin',Schema)
module.exports=Admin_Schema