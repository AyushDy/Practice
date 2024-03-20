const express= require('express');
const connectToDataBase= require('./mongoose');
const userRouter= require('./userRouter');
const pageRouter= require('./pageRouter');
const cors = require('cors');

const app= express();

app.use(cors({ origin: 'http://127.0.0.1:5500' }));

connectToDataBase();

app.use(express.json());

app.use('/api/users', userRouter);
app.use('/app',pageRouter);

const port= 1440;

app.listen(port,()=>console.log('------Server Started------'));



