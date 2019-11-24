const express=require('express');
const mongoose=require('mongoose');
//const config=require('./config');

const app=express();

//body parser middleware
app.use(express.json());

//db path
const db=require('./config/keys').mongoURI;
//const db=config.get('mongoURI');


//db connection
mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true})
.then(()=>console.log('MongoDB connected...')).catch(err=>console.log('ERROR: '+err));


//set port
const port=process.env.PORT || 5020;
//server up
app.listen(port,()=>console.log(`Server Start At ${port} Port...`));
