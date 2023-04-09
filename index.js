const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Backend active!')
})
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods: ["GET","POST"],
    }
});

io.on('connection', (socket) => {
    console.log('user connected',socket.id);

    // It fires when a user disconnects //
    socket.on('disconnect', () => {
        console.log('user disconnected',socket.id);
      });
  });

// Generally we listen app here, but since we have required app inside server (line-5) that's why we are listening server here...
server.listen(port, () => {
  console.log(`Backend active on port ${port}!!!`)
})