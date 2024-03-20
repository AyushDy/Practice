const mongoose= require('mongoose');

DATABASE_URL= "mongodb+srv://rajeevdu972:<password>@cluster0.lttuflo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
DATABASE_PASSWORD= "password808"

const db_url= DATABASE_URL.replace('<password>',DATABASE_PASSWORD);

async function connectToDataBase(){
    try{
        await mongoose.connect(db_url)
        console.log('------connected to database-----');
    }catch(err){
        console.log('Error: Cannot connect',err);
    }
}


module.exports=connectToDataBase;



