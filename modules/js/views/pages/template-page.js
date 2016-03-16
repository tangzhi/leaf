define([
  'jquery',
  'underscore',
  'backbone'
], function home($, _, Backbone) {
  var TemplatePage = Backbone.View.extend({
    el: '.container-default',

    initialize: function initialize() {
    },

    events: {
    },

    render: function render() {
      // 添加页面Dom
    }

    // clean: function clean() {
    // }

  }, {
    // 默认值为 null
    getLayout: 'default'
  });

  return TemplatePage;
});
