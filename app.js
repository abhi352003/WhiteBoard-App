const express = require('express')
const socket = require('socket.io')

const app = express();

app.use(express.static("Public"));

const port = process.env.PORT || 5000;
let server = app.listen(port,()=>{
    console.log(`listening to port  ${PORT}`)
})

let io = socket(server);

io.on("connection",(socket)=>{
    console.log("Made socket Connection")

    socket.on("beginPath",(coordinate)=>{
        io.sockets.emit("beginPath",coordinate)
    })

    socket.on("drawstroke",(coordinate)=>{
        io.sockets.emit("drawstroke",coordinate)
    })

    socket.on("undoredufuction", (data) => {
        io.sockets.emit("undoredufuction", data);
    })


})