const express=require('express');
const router=express.Router();

//item model
const Item =require('../../models/Item');

/**
 * [items.js description]
 * @router   GET api/items
 * @desc     GET All Items
 * @access   Public
 */
 router.get('/',(req,res)=>{
   Item.find().sort({date:-1})
   .then(items=>res.json(items));
 });

modules.exports=router;
