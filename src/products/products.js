// Komponent listy produktów //
export const products = [
    {
      "id": 1,
      "name": "Polska Papierówka",
      "category": "food",
      "price": {
        "value":50,
        "unit":"kg"
      },
      "image": "https://cdn.galleries.smcloud.net/t/galleries/gf-7CSj-7gdp-4trN_papierowka-co-mozna-zrobic-z-jablek-wlasciwosci-zdrowotne-papierowek-664x0-nocrop.jpg",
      "description": "Polskie Jabłka typu papierówka",
      "origin":"Pomorskie",
      "delivery":[{
        "company":"DHL",
        "price":10,
        "unitlimit": 2
      }]
    },
    {
      "id": 2,
      "name": "Bawełniana ECO Koszulka",
      "category": "clothes",
      "price": {
        "value":129.99,
        "unit":"szt"
      },
      "image": "https://1.allegroimg.com/s512/0320f0/3541c61d4c2cbdadea6c3720d821/Koszulka-bawelniana-T-shirt-ADLER-MALFINI-132-S",
      "description": "Koszulka z ekologicznej bawełny",
      "origin":"Pomorskie",
      "delivery":[{
        "company":"DHL",
        "price":20,
        "unitlimit": false
      }]
    },
    {
      "id": 3,
      "name": "Buty Skórzane",
      "category": "clothes",
      "price": {
        "value":339.99,
        "unit":"szt"
      },
      "image": "https://sklepmarka.pl/2321/buty-meskie-casual-skora-polskie-g2681.jpg",
      "description": "Eleganckie buty ze skóry ekologicznej",
      "origin":"Podkarpackie",
      "delivery":[{
        "company":"DHL",
        "price":20,
        "unitlimit": false
      }]
    },
    {
      "id": 4,
      "name":"Wełniany szal",
      "category": "clothes",
      "price": {
        "value":119.99,
        "unit":"szt"
      },
      "image": "https://static5.poszetka.com/pol_pl_SZARY-WELNIANY-SZAL-5373_1.jpg",
      "description": "Ciepły szal z owczej wełny",
      "origin":"Pomorskie",
      "delivery":[{
        "company":"DHL",
        "price":10,
        "unitlimit": false
      }]
    },
    {
      "id": 4,
      "name": "Maseczka ochronna 404",
      "category": "others",
      "price": {
        "value":4.04,
        "unit":"szt"
      },
      "image": "https://image.ceneostatic.pl/data/products/92754271/i-mitex-maseczka-ochronna-z-filtrem-czern.jpg",
      "description": "Maseczka ochronna, chroniąca przed wirusami i bakteriami",
      "origin":"Mazowieckie",
      "delivery":[{
        "company":"DHL",
        "price":5,
        "unitlimit": false
      }]
    },
    {
      "id": 5,
      "name": "Sushi po Białostocku",
      "category": "food",
      "price": {
        "value":29.99,
        "unit":"6-szt"
      },
      "image": "https://static.smaker.pl/photos/c/8/1/c816392a2bcb779bbb659bf24d7785e0_368603_5891b48079153_wm.jpg",
      "description": "Regionalna potrawa prosto z Podlasia - 6szt",
      "origin":"Podlaskie",
      "delivery":[{
        "company":"DHL",
        "price":10,
        "unitlimit": false
      }]
    },
    {
      "id": 6,
      "name": "Podlaskie Kartacze",
      "category": "food",
      "price": {
        "value":16.99,
        "unit":"6-szt"
      },
      "image": "https://kuchnialidla.pl/img/PL/960x540/8a21c9fe7916-c63f36c6fc52-BS_ONLINE_Karol_Okrasa_KW1_25037_Kartacze_z_miesem_19122017_MJ_-s2199_rgb_ok.jpg",
      "description": "Regionalna potrawa prosto z Podlasia - 6szt",
      "origin":"Podlaskie",
      "delivery":[{
        "company":"DHL",
        "price":10,
        "unitlimit": false
      }]
    },
    {
      "id": 7,
      "name": "Zrazy Wołowe",
      "category": "food",
      "price": {
        "value":19.99,
        "unit":"6-szt"
      },
      "image": "https://kuchnialidla.pl/img/PL/960x540/105c35f8f9a7-4bc7a679d119-BS_ONLINE_KW2_KAROL_ZRAZY_178532_RGB_OK_1250x700.jpg",
      "description": "Zrazy wołowe zawijane, z ogórkiem kiszonym w sosie grzybowym - 6 szt",
      "origin":"Śląskie",
      "delivery":[{
        "company":"DHL",
        "price":10,
        "unitlimit": false
      }]
    },
    {
      "id": 8,
      "name": "Proziaki",
      "category": "food",
      "price": {
        "value":9.99,
        "unit":"6-szt"
      },
      "image": "https://www.przyslijprzepis.pl/media/cache/default_view/uploads/media/recipe/0005/74/6c797988c5f287f080f57d46fb717e4a4a136841.jpeg",
      "description": "Tradycyjne pieczywo wypiekane na Podkarpaciu - 6 szt",
      "origin":"Podkarpackie",
      "delivery":[{
        "company":"DHL",
        "price":10,
        "unitlimit": false
      }]
    },
    {
      "id": 9,
      "name": "Bimber Dziadka",
      "category": "drinks",
      "price": {
        "value":29.99,
        "unit":"szt"
      },
      "image": "https://giftmaker.eu/431-thickbox_default/karafka-dla-dziadka-i-love-dziadek.jpg",
      "description": "Wysokoprocentowy napój alkoholowy produkowany w warunkach amatorskich",
      "origin":"Podlaskie",
      "delivery":[{
        "company":"DHL",
        "price":10,
        "unitlimit": false
      }]
    },
    {
      "id": 10,
      "name": "Nalewka Babuni",
      "category": "drinks",
      "price": {
        "value":49.99,
        "unit":"szt"
      },
      "image": "https://image.ceneostatic.pl/data/products/33118160/i-nalewka-babuni-wisniowa-750ml.jpg",
      "description": "Alkoholowy wyciąg z owoców o smaku wiśniowym",
      "origin":"Małopolskie",
      "delivery":[{
        "company":"DHL",
        "price":10,
        "unitlimit": false
      }]
    },
    {
      "id": 11,
      "name": "Nalewka Mistrza Janka",
      "category": "drinks",
      "price": {
        "value":4.50,
        "unit":"szt"
      },
      "image": "https://cdn9.beszamel.smcloud.net/t/thumbs/640/480/1/recipes/photo/jak_zrobic_ekspresowa_nalewke_cytrynowa.jpg",
      "description": "Pyszna naleweczka zrobiona przez Mistrza Janka",
      "origin":"Zachodniopomorskie",
      "delivery":[{
        "company":"DHL",
        "price":10,
        "unitlimit": false
      }]
    },
    {
      "id": 12,
      "name": "Kaszmirowe skarpetki",
      "category": "clothes",
      "price": {
        "value":99.99,
        "unit":"szt"
      },
      "image": "https://www.mongolian.pl/318-large_default/najwyzszej-jakosci-skarpetki-z-kaszmiru-100.jpg",
      "description": "Skarpetki z najwyższej jakości kaszmiru, kto bogatemu zaborni",
      "origin":"Łódzkie",
      "delivery":[{
        "company":"DHL",
        "price":10,
        "unitlimit": false
      }]
    },
    {
      "id": 13,
      "name": "Pasek skórzany PRL",
      "category": "clothes",
      "price": {
        "value":129.99,
        "unit":"szt"
      },
      "image": "https://zigner.pl/wp-content/uploads/2017/10/pasek-skorzany-brazowy1-malye.jpg",
      "description": "Pasek z ekologicznej skóry renomowanej Polskiej marki PRL",
      "origin":"Pomorskie",
      "delivery":[{
        "company":"DHL",
        "price":10,
        "unitlimit": false
      }]
    }
]
