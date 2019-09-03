'use strict';

const io = require('socket.io-client');

const socket = io.connect('https://lab19.azurewebsites.net');

const faker = require('faker');

setInterval( () => {
  socket.emit('speak', faker.hacker.phrase());
},1000);
