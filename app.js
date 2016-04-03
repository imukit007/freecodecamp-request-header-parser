var express = require("express");
var app = express();

app.get('/api/whoami/', function(req, res){
    res.json({
            ipaddress: req.headers['x-forwarded-for'] ||
                       req.connection.remoteAddress,
            language: req.headers["accept-language"].split(",")[0],
            software: req.headers["user-agent"].match(/\((.*?)\)/)[1]
        });
});

app.get('*', function(req, res) {
    res.redirect('/api/whoami/');
});

app.listen(process.env.PORT, process.env.IP, function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("Server Started!!!");
    }
});