const {expressjwt:jwt} = require("express-jwt");

function expressJwt()
{
    return jwt({
        secret: process.env.SECRET, // the jwt secret
        algorithms: ["HS256"], 
    })
    .unless({
        path:[
            {url:'/register', method:['POST']},
            {url:"/login",method: 'POST'},
            {url:"/admin",method: 'POST'},

        ],
    })
}

module.exports = expressJwt