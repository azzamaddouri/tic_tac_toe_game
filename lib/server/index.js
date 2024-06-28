// importing modules
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');

// init express
const app = express()

const port = process.env.PORT || 3000;
var server = http.createServer(app);

var io = require('socket.io')(server);

// client -> middleware -> server
// middleware = manipulating the data from client side to the server 
app.use(express.json());

const DB = "mongodb+srv://maddouriazza:3nNBvFRI1v3twcr6@cluster0.hiuhpxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

io.on('connection', (socket) => {
    console.log("connected!");
});

mongoose.connect(DB).then(() => {
    console.log('Connection successful!');
}).catch((e) => {
    console.log(e);
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server started and running on port ${port}`);
});