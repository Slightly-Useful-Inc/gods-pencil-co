const express = require("express");
const port = process.env.PORT || 3000;

const app = express();


app.use(express.static('./public'));

app.get('/api/prices', (req, res)=>{
    const data = require('./public/api/prices.json')
    res.json(data);
});

app.get('/api/staff', (req, res)=>{
    const data = require('./public/api/staff.json')
    res.json(data);
})

app.get('/api/staff/:name', (req, res)=>{
    const data = require(`./public/api/${req.params.name}.json`)
    res.json(data);
})

app.listen(port);