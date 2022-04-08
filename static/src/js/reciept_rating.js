odoo.define('pos_rating.reciept', function(require){
    'use strict';


    var models = require('point_of_sale.models');
//    console.log("value", models)
    models.load_fields('product.product', 'rating');
//    console.log("sr",models.load_fields)
    var _super_orderline = models.Orderline.prototype;
//    console.log("super", _super_orderline)
//    console.log(models.Orderline,"hyuioyt")
//    console.log(models.Orderline.extend,"gggggg")
    models.Orderline = models.Orderline.extend({
//    console.log("hh")
        export_for_printing: function(){
//            console.log("sadfg")
            var line = _super_orderline.export_for_printing.apply(this, arguments);
            line.rating = this.get_product().rating;
//            console.log('rating = ',line.rating)
            return line;
             }
      });

    });