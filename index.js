const express= require('express');
const mongoose= require('mongoose');
const config= require('./config');

mongoose.connect(config.mongoURL,{useNewUrlParser:true,useUnifiedTopology:true});

const app=express();
app.use(express.json());
app.use('/api/book',require('./routes/bookRoute'));

app.listen(config.PORT,()=> console.log(`listening on ${config.PORT} port`));