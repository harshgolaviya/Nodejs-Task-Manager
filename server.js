const express =require('express')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
require('dotenv/config')
const morgan = require('morgan')

const auth =require('./helper/jwt')
const error = require('./helper/errorhandling')

const Register= require('./Router/register')
const Login = require('./Router/login')
const Profile = require('./Router/profile')
const Admin = require('./Router/admin')

const Database = require('./Database/db')


const app = express()

app.use(auth())
app.use(error)
app.use(bodyParser.json())
app.use(express.urlencoded())
app.use(morgan('tiny')) //logs all requests to the console in dev mode

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/register',Register)
app.use('/login',Login)
app.use('/profile',Profile)
app.use('/admin',Admin)

const Port = process.env.PORT || 3000

app.listen(Port,()=>{
    console.log("Server is listening Port " + Port);
})
