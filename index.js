const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Backend active!')
})

io.on('connection', (socket) => {
    console.log('a user connected');

    // It fires when a user disconnects //
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });

app.listen(port, () => {
  console.log(`Backend active on port ${port}!!!`)
})