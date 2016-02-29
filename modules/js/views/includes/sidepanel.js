define([
  'jquery',
  'underscore',
  'backbone'
], function main($, _, Backbone) {
  var SidepanelView = Backbone.View.extend({

    el: '.sidepanel',

    initialize: function initialize() {
    },

    events: {
    },

    render: function render() {
      console.log('SidepanelView render');

      // 添加页面Dom
      this.$el.html(require('html!templates/includes/sidepanel.html'));
    },

    clean: function clean() {
    }

  });

  return SidepanelView;
});
