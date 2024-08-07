// const http = require("http");
// const fs = require("fs");
// console.log(http);

// const myServer = http.createServer((req , res)=>{
//     const log = `${Date.now()}: from the path of ${req.url} New request recived\n`;
//     fs.appendFile("log.txt" ,log,(err, data)=>{
//         switch(req.url){
//             case "/": res.end("Hello from the server again");
//             break;
//             case "/about": res.end("Hello from the about");
//             break;
//             default:
//                 res.end("404 not found");
//         }
//         // res.end("Hello from the server again");
//     } )
//     // console.log(req);

//     console.log("New req rec.");
//     // res.end("Hello from the server again");
// });
// myServer.listen(8000,()=>{
//     console.log("Server listening from port 8000");
// });


const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();
app.get("/", (req, res)=>{
  return res.send("Hello from the home page");
})

app.get("/about", (req,res)=>{
  return res.send("Hello from the about page " + req.query.myname);
})

app.get("/contact-us",(req,res)=>{
  return res.send("Hello from the contact-us page");
})



// function myHandler (req , res){
//   if(req.url==="/favicon.ico"){
//     return res.end();
// }
// const log = `${Date.now()}: from the path of ${req.method} ${req.url} New request recived\n`
// const myurl = url.parse(req.url , true);
// console.log("Url object returned after parsing");
// console.log(myurl);
// fs.appendFile("logg.txt" , log , (err ,data )=>{
//   // switch(req.url){
//     switch(myurl.pathname){
//     case "/": res.end("hello chinmay from home page");
//     break;
//     case "/about": 
//     const username = myurl.query.myname;
//     res.end(`hello from the about page ${username},  hiiii`);
//     break;
//     case "/contact-us": res.end("hello from the contact-us page");
//     break;
//     default: res.end("404 page not found");
//   }
// });
// console.log("New req rec");
// // res.end("Hello from the server");
// }

// const myserver = http.createServer(myHandler);

 

app.listen(8000, ()=>{
  console.log("Server started at port 8000");
})


// const myserver = http.createServer(app);



// myserver.listen(8000 , ()=>{
//     console.log("server listening from port 8000");
   
// });