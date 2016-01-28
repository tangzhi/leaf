define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var HomeView = Backbone.View.extend({

        el: '.container-default',

        // 默认值为 null
        getLayout: function() {
            return 'default';
        },

        initialize: function() {

        },

        events: {
        },

        render: function() {
            console.log('HomeView render');

            //添加页面Dom
            var content = require('html!templates/home/index.html');
            this.$el.html(content);
            console.log(this.$el.html());
        },

        clean: function() {
        }

    });

    return HomeView;
});
