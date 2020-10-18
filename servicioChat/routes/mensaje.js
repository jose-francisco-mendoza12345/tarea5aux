const Mensaje=require('../database/schema/mensaje');
const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    Mensaje.find().exec((err,docs)=>{
      if(docs.length>0){
        res.json(docs);
      }else{
        res.json({
          message:'no existen mensajes en la bd'
        });
      }
    });
});

module.exports=router;
