var WebSocket = require('ws');
var express = require('express');
var http = require('http')

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
 
var voiceApi = require('../source/walkie-talkie.socket/voice.api.js') 

voiceApi(wss) 

server.listen(process.env.PORT || 8999, () => {
    console.log(`Websocket started on port ${server.address().port}`);
}); 
