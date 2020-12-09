const express = require("express");


class Server{
    
    constructor(port) {
        this.port = port;
        this.app = express();
    }
    
    startServer() {

        this.app.use(express.static('./public'));

        this.app.get('/api/prices', (req, res)=>{
            const data = require('./public/api/prices.json')
            res.json(data);
        });

        this.app.get('/api/staff', (req, res)=>{
            const data = require('./public/api/staff.json')
            res.json(data);
        })

        this.app.get('/api/staff/:name', (req, res)=>{
            const data = require(`./public/api/${req.params.name}.json`)
            res.json(data);
        })

        this.app.listen(this.port);
    }
    
}


module.exports = { Server }