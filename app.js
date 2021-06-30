const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post("/blog", function(req,res){
    console.log( req.body);
    res.json("gotcha");
    res.end();
})

app.listen(3000, console.log(`Server has started at port: 3000`));