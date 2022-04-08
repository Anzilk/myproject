{
    'name': "Pos Rating",
    'version': '15.0.1.0.0',
    'depends': ['base', 'product', 'point_of_sale'],
    'category': 'Pos',
    'installable': True,
    'data': ['views/pos_rating_views.xml'],
    'assets':
        {
            'point_of_sale.assets': [
                'pos_rating/static/src/js/rating.js',
                'pos_rating/static/src/js/reciept_rating.js'


            ],
            'web.assets_qweb': [
                'pos_rating/static/src/xml/rating.xml',
                'pos_rating/static/src/xml/reciept_rating.xml'],
        },
}
