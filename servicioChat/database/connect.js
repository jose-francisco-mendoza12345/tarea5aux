const mongoose=require('mongoose');

mongoose.connect("mongodb://172.30.0.2:27017/chat");

module.exports=mongoose;
