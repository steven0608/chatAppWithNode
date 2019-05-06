const path = require('path');

const http = require('http');
const express = require('express');

const socketio = require('socket.io');


//SET UP EXPRESS SERVER
// add web socket.io
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public');

let count = 0

// serve up the public directory
app.use(express.static(publicDirectoryPath));

io.on('connection', (socket)=>{
  console.log('New web socket connection');

  socket.emit('countUpdated', count);
  
  socket.on('increment', ()=>{
    count++;
    io.emit('countUpdated', count);
  })
});
// listen on port 3000
server.listen(port, ()=>{
  console.log(`Server is up on port ${port}!`);
});
