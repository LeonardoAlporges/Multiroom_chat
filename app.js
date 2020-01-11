/* importa as config do serve */

var app = require('./config/server');

/* parametrizar */
var server = app.listen(80, function(){
    console.log('servidor Oline');
})


var io = require('socket.io').listen(server);
app.set('io', io );

/* criar a conexao por websocket */
io.on('connection', function(socket){
    console.log('Usuario Conectado');

    socket.on('disconnect',function(){
        console.log('Usuario Desconectou');
    })

    socket.on('msgParaServidor',function(data){
        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        );
        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        ); 
        //Atulizar participante
            if(parseInt(data.apelido_atualizado) == 0){
                socket.emit(
                    'participanteParaCliente',
                    {apelido: data.apelido}
                );
                socket.broadcast.emit(
                    'participanteParaCliente',
                    {apelido: data.apelido}
                );
            }
                 
    })


});