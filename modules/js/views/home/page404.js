define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var Page404View = Backbone.View.extend({

        el: 'body',

        // 默认值为 null
        // getLayout: function() {
        //     return null;
        // },

        initialize: function() {

        },

        events: {
        },

        render: function() {
            console.log('Page404 render');

            //设置body的背景色
            this.bodyBackGroundColor = $('body').css('background-color');
            $('body').css("background-color","#F5F5F5");

            //添加页面上选择框式样 awesome-bootstrap-checkbox
            //require('style!css!awesome-bootstrap-checkbox');

            //添加页面Dom
            this.$el.html(require('html!templates/home/404.html'));
        },

        clean: function() {
            //恢复body的背景色
            $('body').css('background-color"', this.bodyBackGroundColor);
        }

    });

    return Page404View;
});
