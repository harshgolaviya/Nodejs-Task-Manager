const express = require('express')
const cron = require('node-cron')

const Task_model = require('../Model/task')
const User_Model = require('../Model/register')


const router = express.Router()

// User can view the task by due date
router.get("/", async (req, res) => {

    try {
        const task = await Task_model.find().sort({duedate:1})
        if(task.length==0) return  res.status(404).json({message:'Tasks is empty'})
        res.status(200).json({message:"Task is sort by duedate", Task : task})

    } catch (error) {
        res.status(404).send(error.message)
    }

})

// User can add the task
router.post('/',async(req,res)=>{

    try {
        
        const user = await  User_Model.findById(req.body.user)
        if(!user)
        return res.status(404).json({message:"User Id not found"})
    
        const task = await Task_model.create({
            title:req.body.title,
            description:req.body.description,
            startdate:req.body.startdate,
            duedate:req.body.duedate,
            user:req.body.user
        })
        if(!task) 
        return res.status(404).json({message:"Task Not Added"})
        res.status(200).json({message:"Task Added Successfully" , Data:task})

    } 
    catch (error) 
    {
        res.send(error.message)
    }
})

// User can update the task
router.put('/:id',async(req,res)=>{
    try 
    {
        const task  = await Task_model.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            description:req.body.description
        })
        if (!task ) 
           return res.status(404).json({message:"Task are  not Found!"});
           res.status(200).json({message:"Task  Updated Succesfully",Data:task})
    } 
    catch (error)
    {
        res.send(error.message)
    }
})


// User can deleted the task
router.delete('/:id',async(req,res)=>{
    try 
    {
        const task  = await Task_model.findByIdAndDelete(req.params.id)
        if (!task ) 
           return res.status(404).json({message:"Task are  not Found!"});
           res.status(200).json({message:"Task  Deleted Succesfully",Data:task})
    }
    catch (error) 
    {
        res.send(error.message)
    }
})



module.exports=router