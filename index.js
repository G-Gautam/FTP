var net = require('net');
var express = require('express');
var bodyParser = require('body-parser');

const file = require('./routes/file.route');
const app = express()

var PORT = 8000;

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://ggupta24:Nyancat12!@ds245677.mlab.com:45677/ftp';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/file', file);

app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
});


// net.createServer(function (sock) {
//     // We have a connection - a socket object is assigned to the connection automatically
//     console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
//     // Add a 'data' event handler to this instance of socket
//     sock.on('data', function (data) {
//         console.log('DATA ' + sock.remoteAddress + ': ' + data);
//         // Write the data back to the socket, the client will receive it as data from the server
//         sock.write('You said "' + data + '"');
//     });
//     // Add a 'close' event handler to this instance of socket
//     sock.on('close', function (data) {
//         console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
//     });

// }).listen(PORT, HOST);

