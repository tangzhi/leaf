define([
    'underscore',
    'backbone',
    'js/models/right'
], function(_, Backbone, Right) {
    var RightCollection = Backbone.Collection.extend({
        url: '/service/rights',
        model: Right
    });

    return RightCollection;
});
