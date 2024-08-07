const User = require("../models/user")


async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    res.setHeader("X-myname","chinmay");
    // Always add a X to the custoom headers...
    console.log(req.headers);
  return res.json(allDbUsers);
}


async function handlegetUserByid(req,res){
    const user = await User.findById(req.params.id);
    if(!user){
        return res.status(404).json({error:"Users not found or User doesnot exist"});
    }
    return res.json(user);
    // const id= Number(req.params.id);
    // // console.log(id);
    // const myuser = users.find((user)=>user.id === id);
    // return res.json(myuser);
}

async function handleUpdateUserByid(req,res){
    await User.findByIdAndUpdate(req.params.id , {lastName:"Changed lastname"});
    return res.json({status:"Success"});
}

async function handleDeleteUserByid(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"Success"});
//     const id = Number(req.params.id);
//     console.log(id);
//     // console.log(users);
//     const myuserIndex = users.findIndex((user)=>user.id===id)
//     console.log(myuserIndex);
//     if(myuserIndex!==0){
//         users.splice(myuserIndex, 1)
//     }
//    fs.writeFile("./MOCK_DATA.json" , JSON.stringify(users), (err,data)=>{
//     if(err){
//         console.log(err);
//         return res.status(500).json({status:"error"});
//     }
//     return res.json({status:"Sucess"});
//    })
   // return res.json({status:"Pending"});
}

async function handlePostUser (req,res){
    const body = req.body;
    if (!body||!body.first_name||!body.last_name||!body.email||!body.job_title||!body.gender)
        {
        res.status(400).json({msg:"All fields are required"});
    }
    const result = await User.create({
    firstName:body.first_name,
    lastName:body.last_name,
    Email:body.email,
    jobTitle:body.job_title,
    gender:body.gender,
   })
    console.log("result",result);
return res.status(201).json({ msg:"success", id:result._id})
    //Push tthe data to the users.. Come from the frontend as postman get request using a urlencoded middleware
    // users.push(
    //    {...body , id:users.length +1} 
    // );
    // console.log("Body" , body);
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
    //     if(err){
    //         console.log(err);
    //         return res.status(500).json({status:"error"});
    //     }
    //     return res.json({status:"Sucess", id:users.length});
        
    // })
    
    // return res.json({status:"Pending"});
}

module.exports = {
    handleGetAllUsers,
    handlegetUserByid,
    handleUpdateUserByid,
    handleDeleteUserByid,
    handlePostUser,
}