var express = require('express');
var router = express.Router();

const anasayfa=function(req, res, next) {
  res.render('mekanlar-liste', { 'baslik': 'Anasayfa', 
  'sayfaBaslik':{
    'siteAd': 'MekanBul',
    'aciklama': 'Isparta civarındaki mekanları keşfedin!'

  },
   auther:'Basem Agwa', 
   'mekanlar':[
    {
      'ad': 'Starbucks',
      'adres': 'Centrum Garden AVM',
      'puan': '4',
      'imkanlar': ['Dünya kahveleri', 'Kekler', 'Pastalar'],
      'mesafe': '10km'
    },
    {
      'ad': 'arbucks',
      'adres': 'CentrumVM',
      'puan': '2',
      'imkanlar': ['Dünya', 'Keer', 'Paslar'],
      'mesafe': '20km'
    },
    {
      'ad': 'Stucks',
      'adres': 'Iyas',
      'puan': '5',
      'imkanlar': ['kafe', 'Kek', 'Pasta'],
      'mesafe': '12km'
    },
    {
      'ad': 'Star',
      'adres': 'Garden AVM',
      'puan': '3',
      'imkanlar': ['kahve', 'Kek', 'Pastalar'],
      'mesafe': '8km'
    },
    {
      'ad': 'Bucks',
      'adres': 'Centrum AVM',
      'puan': '4',
      'imkanlar': ['doner', 'Kekler', 'Pasta'],
      'mesafe': '2km'
    }
  ] });
};


const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', 
  { baslik: 'Mekan Bilgisi', 'sayfaBaslik':'Starbucks', auther:'Basem Agwa',
  'mekanBilgisi':{
    'ad': 'Starbucks',
    'adres': 'Centrum Garden AVM',
    'puan': '4',
    'imkanlar': ['Dünya kahveleri', 'Kekler', 'Pastalar'],
    'koordinatlar':{
      'enlem': '37.781885',
      'boylam': '30.566034'
    },
    'saatler': [
      {
        'gunler': 'Pazartesi-Cuma',
        'acilis': '7:00',
        'kapanis': '23:00',
        'kapali': false
      },
      {
        'gunler': 'Cumartesi',
        'acilis': '9:00',
        'kapanis': '22:00',
        'kapali': false
      },
      {
        'gunler': 'Pazar',
        'kapali': true
      }
    ],
    'yorumlar':[
      {
        'yorumYapan': 'Basem Agwa',
        'puan':'3',
        'tarih': '27.11.2020',
        'yorumMetini': 'Kahveleri guzel.'
      },
      {
        'yorumYapan': 'Ahmet ozturk',
        'puan':'4',
        'tarih': '27.11.2020',
        'yorumMetini': 'Kahveleri guzel.'
      },
      {
        'yorumYapan': 'Furkan Yaman',
        'puan':'5',
        'tarih': '27.11.2020',
        'yorumMetini': 'Kahveleri guzel.'
      }
    ]
  }

});
};


const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle', auther:'Basem Agwa' });
};

module.exports={
  anasayfa,
  mekanBilgisi,
  yorumEkle

}
