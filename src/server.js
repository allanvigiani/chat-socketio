const express = require('express');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http);

io.on('connection', (socket) => {

    // socket.on('disconnect', (data) => {
    //     console.log('desconectou socket ' + socket.id);
    // });

    socket.on('msg', (data) => {
        let message = data.user + ': ' + data.message;
        io.emit('result', message);
    });

});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

http.listen(8000, () => {});