const { json } = require('express');
const fs= require('fs');
const fsPromises= require('fs/promises');

const tourData= JSON.parse(fs.readFileSync('./dataBAse.json'));

module.exports.getAllTours= (req,res)=>{
    res.status(200);
    return res.json({
        status:'OK',
        results: tourData.length,
        tours:{
            tourData
        }
    });
}

module.exports.createTour=(req,res)=>{
    const {id:reqID,...data}=req.body;

    if(!data.name||!data.price){
        res.status(200);
        return res.send({
            status:'fail',
            message:'required parameters: name,price'
        })
    }

    const newId= tourData[tourData.length-1].id+1;
    const newData= {...data, id:newId};
    fsPromises.writeFile('./dataBase.json',JSON.stringify([...tourData,newData]));
   
    res.status(201);
    res.send({
        status:'sucess',
        body:{
            tour:newData
        }
    })
}

module.exports.updateTour= (req,res)=>{
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
    fsPromises.writeFile('./dataBase.json',JSON.stringify(newTours));

    res.status(201);
    res.send({
        status:'sucess',
        body:{
            tour:newData
        }
    })
}

module.exports.getTour= (req,res)=>{
    const id= Number(req.params.id);
    const tour= tourData.find(tour=>tour.id===id)
    if (tour) {
        return res.json(tour); 
    } else {
        return res.status(404).json({ status: 'Not Found', message: 'Invalid request Id' }); 
    }
}

module.exports.deleteTour=(req,res)=>{
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
            status:'invalid request id'
        })
    }
    res.end();
}