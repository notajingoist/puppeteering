var express = require('express');

// start the app / server
var app = express();
var server = app.listen(process.env.PORT || 3000 , function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});

// serve static files
app.use(express.static(__dirname + '/public/'));

// views
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// arm
app.get('/', function(req, res) {
    res.render('index', {
        title: 'the illustrated arm'
    });
});
