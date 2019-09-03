'use strict';

const theword = require('./theword.js');

const io = require('socket.io-client');

const socket = io.connect('https://lab19.azurewebsites.net');

socket.on('the-bird', theword);

