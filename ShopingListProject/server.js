const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app=express();

//body parser middleware
app.use(bodyParser.json());

//db path
const db=require('./config/keys').mongoURI;

//db connection
mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>console.log('MongoDB connected...')).catch(err=>console.log('ERROR: '+err));

//set port
const port=process.env.PORT || 5020;
//server up
app.listen(port,()=>console.log(`Server Start At ${port} Port...`));
/*
$ npm run server
 */
