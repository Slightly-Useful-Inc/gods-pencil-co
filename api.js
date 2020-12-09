const express = require('express')



class API{

    constructor(app){
        this.app = app;
    }


    startAPI(){
        
        this.app.get('/api/prices', (req, res)=>{
            const data = require('../public/api/prices.json')
            res.json(data);
        });

        this.app.get('/api/staff', (req, res)=>{
            const data = require('../public/api/staff.json')
            res.json(data);
        });

        this.app.get('/api/staff/:name', (req, res)=>{
            const data = require(`./public/api/${req.params.name}.json`)
            res.json(data);
        });

    }

}

module.exports = {API}