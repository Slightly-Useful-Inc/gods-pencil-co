const express = require('express')
const server = require('./webServer')
const api = require('./api');
const app = express();

let godsServer = new server.Server(process.env.PORT || 3000, app);
let godsAPI = new api.API(app);
godsAPI.startAPI();
godsServer.startServer();