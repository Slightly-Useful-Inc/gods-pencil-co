const express = require("express");


class Server{
    
    constructor(port, app) {
        this.port = port;
        this.app = app;
        this.app.use(express.static('./public'));
    }
    
    startServer() {
        this.app.listen(this.port);
    }
    
}


module.exports = { Server }