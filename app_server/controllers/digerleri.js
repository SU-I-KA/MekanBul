var express = require('express');
var router = express.Router();

const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkinda', auther:'Basem Agwa' });
};


module.exports={
  hakkinda
}
