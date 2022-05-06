

const socketController =  (socket) => {
    console.log('Cliente Conectado', socket.id);

    socket.on('enviar-mensaje', (payload, callback  ) =>{
        // console.log( payload )
        const id = 123456;
        callback( id );
        
        // this.io.emit('enviar-mensaje', payload);
        socket.broadcast.emit('enviar-mensaje', payload);

    })

    socket.on('disconnect', () => {
        console.log('Cliente Desconectado')
    })
}



module.exports = {
    socketController 
}