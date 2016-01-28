define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var LayoutView = Backbone.View.extend({

        el: 'body',

        initialize: function() {

        },

        events: {
        },

        render: function() {
            console.log('defaultLayout render');

            //添加页面Dom
            this.$el.html(require('html!templates/layout/layout.html'));
            
        },

        clean: function() {
        }

    });

    return LayoutView;
});
