odoo.define('pos_rating.rating', function(require){
    'use strict';


    var ProductItem = require('point_of_sale.ProductItem');
//    console.log("value", ProductItem)
    var Registries = require('point_of_sale.Registries');
//    console.log("regestries", Registries)

    var models = require('point_of_sale.models');
//    console.log("rrrr", models)
    models.load_fields('product.product', 'rating');
    var _super_ProductItem = ProductItem.prototype;
//    console.log("models",_super_ProductItem)
    const NewProductItem = ProductItem =>
        class extends ProductItem {
            get rating() {
//                console.log("this", this.props.product.rating)
//                console.log("name", this.props.product.rating)
                const product = this.props.product.rating
//                console.log("rating", product)
                return product;
        }
        }

    ProductItem.template = 'ProductItem';

    Registries.Component.extend(ProductItem, NewProductItem);

    return ProductItem;
});