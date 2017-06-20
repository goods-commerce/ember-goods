import DS from 'ember-data';
const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  stockCount: attr('number'),
  price: attr('number'),
  product: belongsTo('product'),
  skuImages: hasMany('sku-image'),
  skuFields: hasMany('sku-field'),
});