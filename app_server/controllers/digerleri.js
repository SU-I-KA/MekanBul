var express = require('express');
var router = express.Router();

const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkinda', footer:'Basem Agwa 2020' });
};


module.exports={
  hakkinda
}
