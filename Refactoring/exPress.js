const express= require('express');
const morgan = require('morgan');
const fs=require('fs')

const tourRouter= require('./routes/tourRoutes');
const tours= JSON.parse(fs.readFileSync('./dataBase.json','utf-8'));


const app= express();

app.use(express.json());
app.use(morgan('dev'));
app.use((req,res,next)=>{
    const reqID=Number(req.body.id);
    let idx= tours.findIndex(({id})=>id===reqID)
    
    if(idx===-1){
        return res.status(404).json({
            status:'fail',
            message:'Invalid request Id'
        })
    }
    next();
})


app.use('/api/tours', tourRouter);


app.listen(1440,()=>{
    console.log('server started');
})