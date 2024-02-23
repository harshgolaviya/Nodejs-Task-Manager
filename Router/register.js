const express  = require('express')
const bcrypt = require('bcrypt')

const Register_Model = require('../Model/register')
const router = express.Router()


// User are register with name,number,email,password,confirm_password,address
router.post('/',async(req,res)=>{
    try {
        const {email,password,conform_password,} = req.body;

        const existingUser = await Register_Model.findOne({email});


        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }
    
        // Check if password and confirm password match
        if (password !== conform_password) {
            return res.status(400).json({ error: 'Password and confirm password do not match' });
        }

            const data =  await Register_Model.create({
                name:req.body.name,
                number:req.body.number,
                email:req.body.email,
                password:bcrypt.hashSync(req.body.password,10),
                conform_password:bcrypt.hashSync(req.body.conform_password,10),
                address:req.body.address
            })

            if(!data) return res.status(400).json({message:"User not register"})
            res.status(200).json({Data:data})

    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router