var io = require('socket.io').listen(80);

io.on('connection', function (socket) {
    socket.emit('start', {connect_state: 'success !!!'});

    socket.on('connect_success', function (data) {
        console.log(data);
    });
    socket.on('receiver',function(data){

        console.log(data)
        io.emit('serverMessage',data) //전체로 보냄

        // 메세지를 보낸 사람은 제외
        // socket.broadcast.emit('serverMessage',data)
    })
})


