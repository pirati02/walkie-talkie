module.exports = function (webSocket) { 
    webSocket.on('connection', (ws) => {
        ws.on('message', (message) => {
            console.log('message received')
            console.log(message)
        });

        ws.on('close', function(){
            console.log('connection closed')
        })  
    });
}