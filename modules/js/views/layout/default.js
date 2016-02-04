define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/includes/header',
  'js/views/includes/footer'
], function layout($, _, Backbone, HeaderView, FooterView) {
  var LayoutView = Backbone.View.extend({

    el: 'body',

    initialize: function initialize() {
    },

    events: {
      'click .sidebar-open-button': 'toggleSidebar'
    },

    toggleSidebar: function toggleSidebar(ev) {
      ev.preventDefault();

      if (this.$('.sidebar').hasClass('hidden')) {
        this.$('.sidebar').removeClass('hidden');
        this.$('.content').css({
          marginLeft: 250
        });
      } else {
        this.$('.sidebar').addClass('hidden');
        this.$('.content').css({
          marginLeft: 0
        });
      }
    },

    render: function render(callback) {
      console.log('defaultLayout render');

      // 添加Layout DOM
      this.$el.html(require('html!templates/layout/layout.html'));

      // add page-header DOM
      this.createView('header', HeaderView).render();

      // add container-default DOM
      if (callback) callback();

      // add footer DOM
      this.createView('footer', FooterView).render();
    },

    clean: function clean() {
    }

  });

  return LayoutView;
});
