var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/api',function (req,res) {
    var x = parseInt(req.body.x);
    if(typeof x === "number"){
        var y = x+1;
        var result = new Object();
        result.input = x;
        result.output = y;
        return res.send(JSON.stringify(result));
    }
});

var port = process.env.PORT || 3000;

app.listen(port,function () {
    console.log('Server starting on port '+port);
});