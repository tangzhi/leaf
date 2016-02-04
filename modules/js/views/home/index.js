define([
  'jquery',
  'underscore',
  'backbone'
], function home($, _, Backbone) {
  var HomeView = Backbone.View.extend({

    el: '.container-default',

    initialize: function initialize() {
    },

    events: {
    },

    render: function render() {
      // 添加页面Dom
      var content = require('html!templates/home/index.html');
      this.$el.html(content);
      console.log('HomeView render');
    },

    clean: function clean() {
    }

  }, {
    // 默认值为 null
    getLayout: 'default'
  });

  return HomeView;
});
