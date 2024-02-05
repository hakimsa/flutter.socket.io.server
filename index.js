const express = require('express')

const path = require('path')
const app = express()
const server = require('http').createServer(app);
module.exports. io = require('socket.io')(server);
require('./sockets/socket.js')

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath));


server.listen(3000, (error) => {
    if (error) throw new Error(error);
    console.log(" server runnning")
});