define([
  'jquery',
  'underscore',
  'backbone'
], function footer($, _, Backbone) {
  var FooterView = Backbone.View.extend({

    el: '.footer',

    initialize: function initialize() {
    },

    events: {
    },

    render: function render() {
      console.log('FooterView render');

      // 添加页面Dom
      this.$el.html(require('html!templates/includes/footer.html'));
    },

    clean: function clean() {
    }
  });

  return FooterView;
});
