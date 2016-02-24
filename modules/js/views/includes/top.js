define([
  'jquery',
  'underscore',
  'backbone'
], function header($, _, Backbone) {
  var TopView = Backbone.View.extend({

    el: '#top',

    initialize: function initialize() {
    },

    events: {
    },

    render: function render() {
      console.log('TopView render');

      // 添加页面Dom
      this.$el.html(require('html!templates/includes/top.html'));
    },

    clean: function clean() {
    }

  });

  return TopView;
});
