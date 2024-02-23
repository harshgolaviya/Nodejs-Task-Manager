const express  = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Admin_Model = require('../Model/login')
const User_model = require('../Model/register')
const Task_model = require('../Model/task')

const router = express.Router()

// Generate Token
router.post('/',async(req,res)=>{
    try {
        const Admin = await Admin_Model.findOne({username: req.body.username})
        if (!Admin) return res.status(400).send("Invalid username")
        if(bcrypt.compareSync(req.body.password,Admin.password))
        {
            const token =jwt.sign({
                name:Admin.username,
                password:Admin.password
            },process.env.SECRET,{expiresIn:"1d"})
            res.redirect('/find')
            // res.status(200).json({Email:Admin.email,Token:token}) 
        }
        else
        {
            res.status(400).send("Invalid password")
        }
    } catch (error) {
        res.send(error.message)
    }
})

// Admin can find All User 
router.get('/find',async(req,res)=>{
    const find = await User_model.find({})
    if(find.length == 0) 
    return res.status(404).send("User are not found")
    const user_count=find.length
    res.status(200).json({message:"Total number of user is :- "+user_count,data:find})
})


// Admin can view the task by due date
router.get("/task", async (req, res) => {

    try {
        const task = await Task_model.find().sort({duedate:1})
        if(task.length==0) return  res.status(404).json({message:'Tasks is empty'})
        res.status(200).json({message:"Task is sort by duedate", Task : task})
    } catch (error) {
        res.status(404).send(error)
    }

})

// Admin can Update All User Information
router.put('/',async(req,res)=>{
    const find = await User_model.updateMany({email:req.body.email},
        {
            $set:{
            name:req.body.name,
            number:req.body.number,
            address:req.body.address}
        })
    if(!find) return res.status(404).send("User are not Updated")
    res.status(200).json({message:"User Update Successfully",data:find})
})


// Admin can delete All User Information
router.delete('/',async(req,res)=>{
    const find = await User_model.deleteMany({email:req.body.email})
    if(!find) return res.status(404).send("User are not deleted")
    res.status(200).json({message:"User deleted Successfully",data:find})
})

module.exports =router