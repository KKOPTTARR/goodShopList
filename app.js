const express = require('express');
let path=require("path");//path模块
let router=require("../goodShopList/router/routes");
let bodyParser = require('body-parser');


let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));

app.use("/",router);
let server = app.listen(4333, 'localhost', function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

