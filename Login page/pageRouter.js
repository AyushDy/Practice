const express= require('express');
const controller= require('./controller');

const pageRouter= express.Router();


pageRouter
.route('/signup')
.get(controller.singUpPage);

module.exports= pageRouter;