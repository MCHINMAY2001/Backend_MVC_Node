const mongoose = require("mongoose");

//Defining Schema....
const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type:String,
        required: false,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,

    },
    gender:{
        type:String,

    }
},
{timestamps:true}) 

//Defining UserModel.... 
const User = mongoose.model("user",UserSchema);

module.exports = User;