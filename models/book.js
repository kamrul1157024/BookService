const mongoose= require('mongoose');

const bookSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    author:String,
    genere:String
})

module.exports=mongoose.model('Book',bookSchema);