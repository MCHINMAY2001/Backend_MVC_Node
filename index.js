const express = require("express");
const fs = require("fs");
// const users = require("./MOCK_DATA.json");
// const { error } = require("console");
// const mongoose = require("mongoose");
// const { type } = require("os");
const app = express();
const PORT= 8000;
const {dbConnection} = require("./connection")
const userRouter = require("./routes/user")

//Connecting mongodb

dbConnection("mongodb://127.0.0.1:27017/my-app");


//Middleware Or plugin
app.use(express.urlencoded({extended:false}));

app.use((req, res, next)=>{
    console.log("Hello from the middleware 1");
    next();
})

app.use((req, res, next)=>{
    console.log("Hello from the middleware 2");
    fs.appendFile("log.txt",`\nTime : ${Date.now()} From Ip: ${req.ip} Method: ${req.method} : From the Path of: ${req.path}`,(req,res)=>{
        next();
    })
    
})

app.use((req, res, next)=>{
    console.log("Hello from the middleware 3");
    // return res.end("Hey");
    next();
})
//Routes
app.use("/api/users",userRouter);

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT} `);
})