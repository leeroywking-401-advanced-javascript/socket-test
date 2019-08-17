'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://172.16.0.231:3000');

const faker = require('faker');

setInterval( () => {
  socket.emit('speak', faker.hacker.phrase());
},1000);
