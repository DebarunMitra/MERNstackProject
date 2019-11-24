const express=require('express');
const mongoose=require('mongoose');


const app=express();

//body parser middleware
app.use(express.json());


//set port
const port=process.env.PORT || 5020;
//server up
app.listen(port,()=>console.log(`Server Start At ${port} Port...`));
