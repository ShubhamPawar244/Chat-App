const express = require('express')
const http = require('http');
const path = require('path');
const {Server} = require('socket.io');
const app = express();
const server =http.createServer(app);

app.use(express.static(path.resolve('./public')));

const io = new Server(server);

//socket.io 

io.on('connection', (socket) => {
    socket.on('user_message',msg=>{
        io.emit('message',msg);
    })
});



app.get('/',(req,res)=>{
   return res.sendFile('/public/index.html')
})

server.listen(5400,()=>console.log('server started at 5400'))



