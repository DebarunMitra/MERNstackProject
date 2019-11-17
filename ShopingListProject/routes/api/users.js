const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');

//item model
const User =require('../../models/User');

/**
 * [router.get(),'http://localhost:5020/api/users']
 * @router   POST api/users
 * @desc     register users
 * @access   Public
 */
 router.post('/',(req,res)=>{
   const {name,email,password}=req.body;
   if(!name || !email || !password){
     return res.status.(400).json({msg:'Please enter all fields!'});
   }

   //Check for existing user
   User.findOne({email}).then(user=>{
     if(user){
       return res.status(400).json({msg:'User already exist!'});
     }

     const newUser=new User({
       name,email,password
     });
     //create salt & hash
     bcrypt.genSalt(10,(err,salt)=>{
       bcrypt.hash(newUser,password,salt, (err,hash)={
         if(err) throw err;
         newUser.password=hash;
         newUser.save().then(user=>{
           res.json({
             user:{
               id:user.id,
               name:user.name,
               email:user.email
             }
           })
         })
       })
     })
   });


 });

module.exports=router;
