define([
  'jquery',
  'underscore',
  'backbone'
], function header($, _, Backbone) {
  var HeaderView = Backbone.View.extend({

    el: '.page-header',

    initialize: function initialize() {
    },

    events: {
    },

    render: function render() {
      console.log('HeaderView render');

      // 添加页面Dom
      this.$el.html(require('html!templates/includes/header.html'));
    },

    clean: function clean() {
    }

  });

  return HeaderView;
});
