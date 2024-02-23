const express = require('express')

const User_model = require('../Model/register')
const  router = express.Router()


//User can Update Their Profile Information
router.put('/:id',async(req,res)=>{
    try {
        const find = await User_model.findByIdAndUpdate(req.params.id,
            {
                name:req.body.name,
                number:req.body.number,
                address:req.body.address
            })
        if(!find) return res.status(404).json({message:"User is Invalid"})
        res.status(200).json(
            {message:"Successfully update  user info.",data:find}
        )
    } catch (error) {
        res.send(error.message)
    }
})

// User can delete their account
router.delete('/:id',async(req,res)=>{
    try {
        const find = await User_model.findByIdAndDelete(req.params.id)
        if(!find) return res.status(404).json({message:"User is Invalid"})
        res.status(200).json(
            {message:"Successfully deleted  user info.",data:find}
        )
    } catch (error) {
        res.send(error.message)
    }
})

module.exports=router
