
const fs = require("fs");
//This was a sync... call
// fs.writeFileSync("./test.txt" , "Hey chinmay");

// Async file call
// fs.writeFile("./test.txt" , "Hey Chinmayy & this is a async call" , (err)=>{});


//Sync call
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);


//Async call
// fs.readFile("./contacts.txt" , "utf-8" ,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// } );

// fs.appendFileSync("./test.txt" , new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt" ,`${Date.now()} Hey there\n`);



//Demonstrating the blocking execution....(sync)

console.log("1");
console.log("2");
console.log("3");
const result =fs.readFileSync("./contacts.txt" , "utf-8");
console.log(result);

console.log("4");



//demonstrating the non-blocking execution...(async)


console.log("demonstrating the async call");
console.log("1");
fs.readFile("./contacts.txt","utf-8", (err, re)=>{
    if(err){
        console.log(err);
    }else{
        console.log(re);
    }
});
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");


const os = require("os");
console.log(os.cpus().length);