import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr(),
  slug: DS.attr(),
  insertedAt: DS.attr("date"),
  createdAt: DS.attr("date"),
  isArchived: DS.attr("boolean"),
  isDeleted: DS.attr("boolean"),
  isPublished: DS.attr("boolean"),
  isHidden: DS.attr("boolean")
});
