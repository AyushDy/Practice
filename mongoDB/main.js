const mongoose= require('mongoose');

DATABASE_URL= "mongodb+srv://rajeevdu972:<password>@cluster0.lttuflo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
DATABASE_PASSWORD= "password808"

const db_url= DATABASE_URL.replace('<password>',DATABASE_PASSWORD);

mongoose.connect(db_url).then((con)=>{
    console.log('---------connected to database-----------');
})

const  userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Tour name is mandatory"],
        unique: true,
    },
    gender:{
        required: true,
        type: String,
    },
    age:{
        type: Number,
        default: 18,
    },
    description: String
});

const User= mongoose.model('User', userSchema);

const userNew= new User({
    name: 'GAnesh',
    gender: 'male',
    age: 18,
    description: "Have a blast, it can be your last!"
})


userNew.save().then((doc)=>{
    console.log('--------DOC Created---------');
    console.log(doc);
}).catch((err)=>{
    console.log('ERROR::',err)
})