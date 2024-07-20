from marshmallow import Schema, fields, validate

class ProductSchema(Schema):
    ProductID = fields.Int(required=True)
    ProductName = fields.Str(required=True, validate=validate.Length(min=1, max=100))
    ProductPhotoURL = fields.Url(required=True, validate=validate.Length(max=255))
    ProductStatus = fields.Str(required=True, validate=validate.OneOf(['Active', 'InActive']))