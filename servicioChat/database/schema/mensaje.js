const mongoose=require('../connect');

const mensaje={
    senderNickname:String,
    message:String
};

const mensajemodel=mongoose.model('mensaje',mensaje);

module.exports=mensajemodel;
