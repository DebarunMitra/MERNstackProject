const express=require('express');
const mongoose=require('mongoose');
//const config=require('./config');

const app=express();

// Load Routes
const auth = require('./routes/auth');

//body parser middleware
app.use(express.json());

//db path
const db=require('./config/keys').mongoURI;
//const db=config.get('mongoURI');


//db connection
mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true})
.then(()=>console.log('MongoDB connected...')).catch(err=>console.log('ERROR: '+err));


// Use Routes
app.use('/auth', auth);


//set port
const port=process.env.PORT || 5020;
//server up
app.listen(port,()=>console.log(`Server Start At ${port} Port...`));
