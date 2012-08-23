var fs = require('fs')
    , http = require('http')
    , socketio = require('socket.io');
var server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/paint.html'));
}).listen(80, function() {
    console.log('Listening at: http://localhost:80');
});
socketio.listen(server).on('connection',function(socket){
    socket.on('message',function(pos){
		console.log('come on baby');
        socket.broadcast.json.send(pos);
    });
});