'use strict';

let express  = require('express');

let path = require('path');

let app = express();

var fs = require("fs");

var ejs = require('ejs')


var json_path = path.join(__dirname, 'public/json/');

function get_json_string(json){
    return JSON.stringify(require(json_path + json ));
}

app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));

app.engine('.html', ejs.__express);

app.set('view engine', 'html');

app.get('/', function(req, res){
  try {
    res.render('index');
  } catch (e) {
    console.error(e);
  }
});
var server = app.listen(81, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('firstgrid_front listening at http://%s:%s', host, port);
});
