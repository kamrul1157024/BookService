require('dotenv').config();
const express= require('express');
const mongoose= require('mongoose');


mongoose.connect(process.env.mongoURL,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});

const app=express();
app.use(express.json());
app.use('/api/book',require('./routes/bookRoute'));
app.use('/api',require('./routes/authentication'));

app.listen(process.env.PORT,()=> console.log(`listening on ${process.env.PORT} port`));