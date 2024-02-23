const express  = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Register_Model = require('../Model/register')
const Task = require('../Router/task')
const router = express.Router()

router.use('/task',Task)


// User can login with email and password
router.post('/',async(req,res)=>{
    try {
        const User = await Register_Model.findOne({email: req.body.email})
        if (!User) return res.status(400).send("Invalid email")
        if(bcrypt.compareSync(req.body.password,User.password))
        {
            const token =jwt.sign({
                name:User.name,
                address:User.address
            },process.env.SECRET,{expiresIn:"1d"})
            res.status(200).json({Email:User.email,Token:token}) 
            // res.status(200).json({message:"User are sucessfully login"})
        }
        else
        {
            res.status(400).send("Invalid password")
        }
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router