var express = require('express');
var router = express.Router();

const anasayfa=function(req, res, next) {
  res.render('mekanlar-liste', { title: 'Anasayfa', auther:'Basem Agwa', 'places':[
    {
      'ad': 'Starbucks',
      'adres': 'Centrum Garden AVM',
      'puan': '4',
      'info': ['Dünya kahveleri', 'Kekler', 'Pastalar'],
      'mesafe': '10km'
    },
    {
      'ad': 'arbucks',
      'adres': 'CentrumVM',
      'puan': '2',
      'info': ['Dünya', 'Keer', 'Paslar'],
      'mesafe': '20km'
    },
    {
      'ad': 'Stucks',
      'adres': 'Iyas',
      'puan': '5',
      'info': ['kafe', 'Kek', 'Pasta'],
      'mesafe': '12km'
    },
    {
      'ad': 'Star',
      'adres': 'Garden AVM',
      'puan': '3',
      'info': ['kahve', 'Kek', 'Pastalar'],
      'mesafe': '8km'
    },
    {
      'ad': 'Bucks',
      'adres': 'Centrum AVM',
      'puan': '4',
      'info': ['doner', 'Kekler', 'Pasta'],
      'mesafe': '2km'
    }
  ] });
};


const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', { title: 'Mekan Bilgisi', auther:'Basem Agwa' });
};


const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle', auther:'Basem Agwa' });
};

module.exports={
  anasayfa,
  mekanBilgisi,
  yorumEkle

}
