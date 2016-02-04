define([
  'jquery',
  'underscore',
  'backbone'
], function page404($, _, Backbone) {
  var Page404View = Backbone.View.extend({

    el: 'body',

    initialize: function initialize() {
    },

    events: {
    },

    render: function render() {
      console.log('Page404 render');

      // 设置body的背景色
      $('body').css('background-color', '#F5F5F5');

      // 添加页面Dom
      this.$el.html(require('html!templates/home/404.html'));
    },

    clean: function clean() {
      // 恢复body的背景色
      $('body').css('background-color', '');
    }

  });

  return Page404View;
});
