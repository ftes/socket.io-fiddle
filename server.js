
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const proxy = require('http-proxy-middleware');
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

const webpackHmrProxy = proxy(
  // uncomment the next line to fix
  // '/__webpack_hmr',
  {
    target: 'http://localhost:4000',
    ws: true,
  });
app.use('/__webpack_hmr', webpackHmrProxy);

io.on('connect', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));

function onConnect(socket){
  console.log('connect ' + socket.id);

  socket.on('disconnect', () => console.log('disconnect ' + socket.id));
}
