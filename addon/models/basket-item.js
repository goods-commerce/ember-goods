import DS from "ember-data";
import attr from "ember-data/attr";
import { belongsTo } from "ember-data/relationships";

export default DS.Model.extend({
  quantity: attr("number"),
  price: attr("number"),
  isHidden: attr("boolean"),
  code: attr("string"),
  discount: attr("number"),
  metadata: attr(),
  promotionApplicationMax: attr("number", { defaultValue: 0 }),
  basket: belongsTo("basket"),
  sku: belongsTo("sku"),
  promotion: belongsTo("promotion"),
});
