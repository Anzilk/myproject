from odoo import models, fields


class SaleRating(models.Model):
    _inherit = "product.product"

    rating = fields.Selection(string='Rating',
                              selection=[('1', '1'),
                                         ('2', '2'),
                                         ('3', '3'),
                                         ('4', '4'),
                                         ('5', '5')])
