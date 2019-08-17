'use strict';

const theword = require('./theword.js');

const io = require('socket.io-client');

const socket = io.connect('http://172.16.0.231:3000');

socket.on('the-bird', theword);

