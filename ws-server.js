import WebSocket from 'ws';

noop = () => {}

heartbeat = () => {
    this.isAlive = true;
}
const wss = new WebSocket.Server({
    port: 5000
})

wss.on('connection', ws => {
    ws.isAlive = true;
    ws.on('pong', heartbeat);
    
    ws.on('message',(data) => {
        console.log(data)
    })
    ws.on('close',() => {
        ws.send('server connection closed')
    })
    ws.send('Welcome')
})

