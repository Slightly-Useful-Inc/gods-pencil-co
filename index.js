const express = require("express");
const port = process.env.PORT || 3000;

const app = express();


app.use(express.static('./public'));

app.get('/api/prices', (req, res)=>{
    res.json("./public/api/prices.json")
});


app.listen(port);