const express=require('express');
const router=express.Router();

//item model
const Item =require('../../models/Item');

/**
 * [router.get(),'http://localhost:5020/api/items']
 * @router   GET api/items
 * @desc     GET All Items
 * @access   Public
 */
 router.get('/',(req,res)=>{
   Item.find().sort({date:-1})
   .then(items=>res.json(items));
 });

 /**
  * [router.post(),'http://localhost:5020/api/items']
  * @router   POST api/items
  * @desc     create an item
  * @access   Public
  */
  router.post('/',(req,res)=>{
    const newItem=new Item({
      name:req.body.name
    });
    newItem.save().then(item=>res.json(item));
  });

  /**
   * [router.delete(),'http://localhost:5020/api/items/:id']
   * @route    DELETE api/items/:id
   * @desc     delete an item
   * @access   Public
   */
   router.delete('/:id',(req,res)=>{
     Item.findById(req.params.id).then(item=>
       item.remove().then(()=>
       res.json({success:true}))
     ).catch(err=>
       res.status(404).json({success:false})
     );
   });


module.exports=router;
