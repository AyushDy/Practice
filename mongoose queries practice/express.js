const express= require('express');
const connectToDataBase= require('./mongoose');
const userRouter= require('./tourRouter');
const cors = require('cors');
const fs= require('fs/promises');
const tourRouter = require('./tourRouter');

const app= express();

app.use(cors({ origin: 'http://127.0.0.1:5500' }));

connectToDataBase();

app.use(express.json());

app.use('/api/tours', tourRouter);

const port= 1440;

app.listen(port,()=>console.log('------Server Started------'));



