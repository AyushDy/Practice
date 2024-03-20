const User= require('./userSchema');
const path = require('path');

module.exports.registerUser= async (req,res)=>{
    try{
        console.log(req.body);
        const newUser= await User.create(req.body);
        res.status(201);
        res.send({
            status:'success',
            body:{
                user:newUser,
            }
        })
    }catch(err){
        console.log(err);
        res.status(422);
        res.send({
            status:'fail',
            message:err.message,
        })
    }
}

module.exports.singUpPage= (req,res)=>{
    return res.sendFile(__dirname+"/SignUp.html"+"<style>"+"/login.css"+"</style>");
}






