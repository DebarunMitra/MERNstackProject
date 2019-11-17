const express=require('express');
const router=express.Router();

//item model
const User =require('../../models/User');

/**
 * [router.get(),'http://localhost:5020/api/users']
 * @router   POST api/users
 * @desc     register users
 * @access   Public
 */
 router.post('/',(req,res)=>{
   res.send('register');
 });

module.exports=router;
