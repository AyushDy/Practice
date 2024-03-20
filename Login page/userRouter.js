const express= require('express');
const controller= require('./controller');

const userRouter= express.Router();

userRouter
.route('/')
.post(controller.registerUser);


module.exports= userRouter;