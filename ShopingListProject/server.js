const express=require('express');
const mongoose=require('mongoose');
const config=require('config');

//add routes
const items=require('./routes/api/items');

const app=express();

//body parser middleware
app.use(express.json());

//db path
//const db=require('./config/keys').mongoURI;
const db=config.get('mongoURI');

//db connection
mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true})
.then(()=>console.log('MongoDB connected...')).catch(err=>console.log('ERROR: '+err));

//use routes
app.use('/api/items',items);
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));

//set port
const port=process.env.PORT || 5020;
//server up
app.listen(port,()=>console.log(`Server Start At ${port} Port...`));
