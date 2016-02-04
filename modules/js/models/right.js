define([
  'underscore',
  'backbone'
], function right(_, Backbone) {
  var RightModel = Backbone.Model.extend({
    urlRoot: '/service/rights'
  });
  return RightModel;
});
