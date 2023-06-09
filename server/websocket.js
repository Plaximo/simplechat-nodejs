﻿const WebSocket = require('ws');

const server = new WebSocket.Server({ port: PORT });

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        server.clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
