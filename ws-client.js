import WebSocket from 'ws';
import { v4 as uuidv4 }from 'uuid';
const ws = new WebSocket('ws://localhost:5000');


ws.on('open', () => {
    ws.send('Client - Connection started')
    const info = {
        id: uuidv4(),
        date: Date.now()
    }
    ws.send(JSON.stringify(info))
})

ws.on('message', (data) => {
    console.log(data)
})

ws.on('error',() => console.log('error'))
