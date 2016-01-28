define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var RightModel = Backbone.Model.extend({
        urlRoot: '/service/rights'
    });
    return RightModel;
});
