define([
  'underscore',
  'backbone',
  'js/models/tile'
], function main(_, Backbone, Tile) {
  var TileList = Backbone.Collection.extend({
    url: '/service/tiles',

    model: Tile,

    comparator: 'order'

  });

  return new TileList();
});
