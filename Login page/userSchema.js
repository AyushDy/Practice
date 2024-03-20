const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Username is mandatory'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Password is mandatory']
    },
    tasks:{
        type:Array,
    }
})

const User= mongoose.model('NewUser',userSchema);

module.exports=User;