const { io } = require("../index")

io.on('connection', client => {
    console.log("cliente Conectado");
    client.on('disconnect', () => {

        console.log("cliente disconectado")
    });

    client.on('message', (payload) => {
        console.log("data", payload["nombre"])
    })
    client.emit('srv', { nombre: "Servidor A ok" })
});

