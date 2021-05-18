var express = require('express');
var app = express();
var PORT = 8080;
const fs = require('fs');
const data=require("./data.json");
app.use(express.json());
    
app.post('/coins', function (req, res) {
    try{
        if(req.body.rollno in data.coins){
            res.end('{"coins":'+data.coins[req.body.rollno]+'}');
        }else throw "roll no Not_FOUND";
    }catch(err){
        res.end(err);
    }
})
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
