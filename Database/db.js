const mongoose = require('mongoose')
require('dotenv/config')

    
mongoose.pluralize(null);
mongoose.set('strictQuery',false);



module.exports  = mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log("Connected");
})
.catch((err)=>{
    console.log(err);
}) 


