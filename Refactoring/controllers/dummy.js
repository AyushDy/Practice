const express= require('express');
const fs= require('fs/promises');
const tourData= require('./dataBase.json');
const exp = require('constants');
const { json } = require('body-parser');

const api= express();
const port=1440;
api.use(express.json());

api.get('/api/tours',function (req,res){
    res.status(200)
    return res.json({
        status:'OK',
        results: tourData.length,
        tours:{
            tourData
        }
    });
});

api.get('/api/tours/:id',function(req,res){
    const id= Number(req.params.id);
    const tour= tourData.find(tour=>tour.id===id)
    if (tour) {
        return res.json(tour); 
    } else {
        return res.status(404).json({ status: 'Not Found', message: 'Tour not found' }); 
    }
})

api.post('/api/tours',function(req,res){
    const data= req.body;
    // console.log(data);
    const newId= tourData[tourData.length-1].id+1;
    const newData= {...data, id:newId};
    // console.log(newData);
    fs.writeFile('./dataBase.json',JSON.stringify([...tourData,newData]));
    if(data){
    res.status(201);
    res.send({
        status:'sucess',
        body:{
            tour:newData
        }
    })
}
else{
    res.status(400);
    res.send({
        status:'failed/ no data'
    })
}
})

api.patch('/api/tours/:id',function (req,res){
    const id= Number(req.params.id)
    const data= req.body;
    let tour= tourData.find(tour=>tour.id===id);
    const newData=  {...tour,...data};
    const newTours= tourData.map(ele=>{
        if(ele.id===id){
            return newData;
        }else{
            return ele;
        }
    })
    fs.writeFile('./dataBase.json',JSON.stringify(newTours));

    res.status(201);
    res.send({
        status:'sucess',
        body:{
            tour:newData
        }
    })
})

api.put('/api/tours/:id',function (req,res){
    const id= Number(req.params.id);
    const data= {...req.body,id:id};
    const newTours=tourData.map(ele=>{
        if(ele.id===id){
            return data;
        }else{
            return ele;
        }
    })
    fs.writeFile('./dataBase.json',JSON.stringify(newTours))

    res.status(201);
    res.send({
        status:'sucess',
        body:{
            tour:data
        }
    })
})

api.delete('/api/tours/:id',function (req,res){
    const id= Number(req.params.id);
    const index=tourData.findIndex(ele=>ele.id===id);
    if(index>-1){
        tourData.splice(index,1);
        fs.writeFile('./dataBase.json',JSON.stringify(tourData));
        res.status(201);
        res.send({
            status:'OK'
    })}else{
        res.status(404);
        res.send({
            status:'id does not exist'
        })
    }
    res.end();
})





api.listen(port,()=>{
    console.log('server started')
});