const express = require("express");
const User = require("../models/user")
const {
    handleGetAllUsers,
    handlegetUserByid,
    handleUpdateUserByid,
    handleDeleteUserByid,
    handlePostUser
} = require("../controller/user")

const router = express.Router();


//Routes
// router.get("/",async (req,res)=>{
//     const allDbUsers = await User.find({});
//     const html = `
//     <ul>
//     ${allDbUsers.map((user)=>
//         `<li>${user.firstName} - ${user.Email}</li>`
//     ).join("")}
//     </ul>
//     `;
//     res.send(html);
// })



//Rest Api
router.route("/")
.get(handleGetAllUsers)
.post(handlePostUser);

// app.get("/api/users/:id" , (req,res)=>{
//     const id = Number(req.params.id);
//     console.log(id);
//     const myuser = users.find((user)=>user.id===id) 
//     return res.json(myuser);

// })

//Find by id
router
.route("/:id")
.get(handlegetUserByid)
.patch(handleUpdateUserByid)
//delete request...
.delete(handleDeleteUserByid)



//Now express don't know how to handle the datacome from the front end thats why we need to use the MIddleware(Plugins)


module.exports = router;