const server = require('./server')


let myServer = new server.Server(process.env.PORT || 3000);
myServer.startServer();