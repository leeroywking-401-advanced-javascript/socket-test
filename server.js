'use strict';

// Create an instance of a socket server
const port = process.env.PORT || 3000;
const io = require('socket.io')(port);

// allow connections
io.on('connection', (socket) => {

  console.log('Welcome', socket.id);

  // Subcribe to an event
  socket.on('speak', (payload) => {
    console.log('.');
    // ON that event, send out a message to the world
    socket.broadcast.emit('the-bird', payload);
  })

});


