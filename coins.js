var express = require('express');
var app = express();
var PORT = 8080;
  
app.use(express.json());
    
app.post('/coins', function (req, res) {
    if(req.body.rollno=="200619")res.end('{"coins":infinite}');
    else res.end('{"coins":'+parseInt(req.body.rollno)+'}');
})
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
