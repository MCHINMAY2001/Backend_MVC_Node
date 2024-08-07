const mongoose = require("mongoose");

const  dbConnection = async (url)=>{
    await mongoose.connect(url)
    .then(()=>
        console.log("mongo db connection is succesful")
    ).catch((err)=>console.log("Mongodb Error",err))
}

module.exports = {
    dbConnection,
}