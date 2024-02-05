const { io } = require("../index")

io.on('connection', client => {
   
client.on('zaz', (payload) => {
console.log(payload)

    client.emit('flutter', "data form server imdiatamente OK")
    });

    
   
    })



