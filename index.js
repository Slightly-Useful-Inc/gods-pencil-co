const express = require("express");
const port = process.env.PORT || 3000;

const app = express();


app.use(express.static('./public'));

app.get('/api/prices', (req, res)=>{
    const data = require('./public/api/prices.json')
    res.json(JSON.stringify(data));
});

app.get('/api/staff', (req, res)=>{
    const data = require('./public/api/staff.json')
    res.json(JSON.stringify(data));
})


app.listen(port);