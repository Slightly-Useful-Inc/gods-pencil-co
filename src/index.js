const express = require("express");
const port = 1000;

const app = express();


app.use(express.static('public'));


app.listen(port);