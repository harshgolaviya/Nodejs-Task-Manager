const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    startdate:{
        type:Date,
        required:true
    },
    duedate:{
        type:Date,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    }
})

const Taks_schema = mongoose.model('task',Schema)
module.exports=Taks_schema;
