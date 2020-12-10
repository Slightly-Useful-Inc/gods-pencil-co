const express = require('express')
const path = require('path')


class API{

    constructor(app){
        this.app = app;
    }


    startAPI(){
        //Public API Calls
        this.app.get('/api/prices', (req, res)=>{
            const data = require('./public/api/prices.json')
            res.json(data);
        });

        this.app.get('/api/staff', (req, res)=>{
            const data = require('./public/api/staff.json')
            res.json(data);
        });
        
        this.app.get('/api/staff/:name', (req, res)=>{
            const data = require(`./public/api/${req.params.name}.json`)
            res.json(data);
        });
        
        //Auth Calls
        this.app.get('/auth/admin/:token', (req, res)=>{
            if (req.params.token == "test"){
                res.redirect('../../admin/')
            }
            else{
                res.sendStatus(403)
            }
        })

    }

}

module.exports = {API}