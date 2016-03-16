define([
  'underscore',
  'backbone',
  'js/models/menuitem'
], function main(_, Backbone, Item) {
  var MenuItems = Backbone.Collection.extend({

    model: Item,

    comparator: 'order'

  });

  return MenuItems;
});
