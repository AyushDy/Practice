const express= require('express');
const controller= require('./controller');

const tourRouter= express.Router();

tourRouter
.route('/')
.post(controller.createTour)
.get(controller.getAllTours)


tourRouter
.route('/:id')
.patch(controller.updateTour)
.delete(controller.deleteTour)
.get(controller.getTour)


module.exports= tourRouter;