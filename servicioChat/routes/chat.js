const Mensaje=require('../database/schema/mensaje');

module.exports=(socket) => {
      console.log('user connected');
      socket.on('join', function(userNickname) {
              console.log(userNickname +" : has joined the chat "  );
              socket.broadcast.emit('userjoinedthechat',userNickname +" : has joined the chat ");
      });
      socket.on('messagedetection', async(senderNickname,messageContent) => {
             console.log(senderNickname+" :" +messageContent)
             let message = {"message":messageContent, "senderNickname":senderNickname}
             let mess=new Mensaje(message);
             result=await mess.save();
             //console.log(result);
             socket.emit('message', message );
      });
       socket.on('disconnect', function() {
          console.log( ' user has left ')
          socket.broadcast.emit("userdisconnect"," user has left ")
      });
};
