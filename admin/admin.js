  'use strict';

  let express = require('express');

  let path = require('path');

  let app = express();

  var jsonfile = require('jsonfile');

  var bodyParser = require('body-parser');


  import {
      home_page_json,
      header_json,
      footer_json,
      about_page_json,
      service_page_json,
      recruit_page_json,
      contact_page_json
  } from './src/js/module/global';

  let post_url = [{
      name: 'modules',
      url: home_page_json
  }, {
      name: 'modules',
      url: header_json
  }, {
      name: 'modules',
      url: footer_json
  }, {
      name: 'modules',
      url: about_page_json
  }, {
      name: 'modules',
      url: service_page_json
  }, {
      name: 'modules',
      url: recruit_page_json
  }, {
      name: 'modules',
      url: contact_page_json
  }];

  app.use(bodyParser.json());


  var fs = require("fs");

  var ejs = require('ejs');


  var json_path = path.join(__dirname, 'public/json/');

  function get_json_string(json) {
      return JSON.stringify(require(json_path + json));
  }

  app.use(express.static(path.join(__dirname, 'public')));


  app.set('views', path.join(__dirname, 'views'));

  app.engine('.html', ejs.__express);

  app.set('view engine', 'html');

  app.get('/admin', function(req, res) {
      try {
          res.render('index', {
              title: '测试一下传参'
          });
      } catch (e) {
          console.error(e);
      }
  });
  app.get('/', function(req, res) {
      try {
          res.render('index');
      } catch (e) {
          console.error(e);
      }
  });

  post_url.map(function(item) {
      let name = item.name;
      app.post(item.url, function(req, res) {
          let file = path.join(__dirname, 'public' + item.url);
          let obj = {};
          if (name === null) {
              obj = req.body.json;
          } else {
              obj[item.name] = req.body.json;
          }

          console.log(`-----save-----${item.url}-----${new Date().toLocaleString()}-----`);
          jsonfile.writeFile(file, obj, function(err) {
              if (err) {
                  console.error(err);
              }
          });
          res.json({
              code: 0
          });
      });
  });

  app.post('/deploy', function(req, res) {

      var date = new Date();
      let file = path.join(__dirname, 'public' + req.body.json);

      let destFile = '../www/public/' + req.body.json;

      let destFile_bak = '../www/public/' + req.body.json + date.getTime();

      // fs.writeFileSync(destFile_bak, fs.readFileSync(destFile));
      // fs.createReadStream(destFile).pipe(fs.createWriteStream(destFile_bak));
      fs.createReadStream(file).pipe(fs.createWriteStream(destFile));
      console.log(`-----deploy-----${req.body.json}-----${new Date().toLocaleString()}-----`);
      res.json({
          code: 0
      });
  });

  var server = app.listen(82, function() {
      var host = server.address().address;
      var port = server.address().port;
      console.log('firstgrid_admin listening at http://%s:%s', host, port);
  });
