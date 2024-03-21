const Tour= require('./toursSchema');


module.exports.createTour= async (req,res)=>{
    try{
        console.log(req.body);
        const newTour= await Tour.create(req.body);
        res.status(201);
        res.send({
            status:'success',
            body:{
                user:newTour,
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

module.exports.deleteTour = async (req, res) => {
    const { id: paramId } = req.params;
    try{
        const tour = await Tour.findOneAndDelete({
            "_id": paramId
        });
        if(!tour) throw new Error("Invalid Tour Id");
        res.status(204);
        res.json({
            status: 'success',
            body: null
        });
    }
    catch(err){
        res.status(404);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}


module.exports.getAllTours = async (req, res) => {
    const {sort='-price',filters}=req.query;
    console.log(sort);
    try{
        let psort= sort.split(',').join(' ');
        let tours = await Tour.find().sort(psort);
        res.status(200);
        res.json({
            status: 'success',
            body:{
                tours: tours
            }
        });
    }
    catch(err){
        res.status(500);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}



module.exports.getTour = async (req, res) => {
    const { id: paramId } = req.params;
      
    try{
        const tour = await Tour.findOne({
            "_id": paramId
        });
        res.status(200);
        res.json({
            status: 'success',
            body:{
                tour: tour
            }
        });
    }
    catch(err){
        res.status(500);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}


module.exports.updateTour = async (req, res) => {
    const { id: paramId } = req.params;
    const {_id, __v,createdAt, ...body} = req.body;
    try{
        const tour = await Tour.findOneAndUpdate({"_id": paramId,}, body, {
            new: true,
        });
        if(!tour) throw new Error("Invalid Tour Id");
        res.status(201);
        res.json({
            status: 'success',
            body: tour
        });
    }
    catch(err){
        res.status(404);
        res.json({
            status: 'fail',
            message:err.message,
        });
    }
}







