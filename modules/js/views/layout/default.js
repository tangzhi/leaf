define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/includes/top',
  'js/views/includes/sidebar',
  'js/views/includes/header',
  'js/views/includes/footer',
  'js/views/includes/sidepanel'
], function layout($, _, Backbone, TopView, SidebarView, HeaderView, FooterView, sidepanelView) {
  var LayoutView = Backbone.View.extend({

    el: 'body',

    initialize: function initialize() {
    },

    events: {
      'click .sidebar-open-button': 'toggleSidebar',
      'click .sidepanel-open-button': 'toggleSidepanel'
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

    toggleSidepanel: function toggleSidepanel(ev) {
      ev.preventDefault();

      this.$('.sidepanel').toggle(100);
    },

    render: function render(callback) {
      console.log('defaultLayout render');

      // 添加Layout DOM
      this.$el.html(require('html!templates/layout/layout.html'));

      // add #top DOM
      this.createView('top', TopView).render();

      // add .sidebar DOM
      this.createView('sidebar', SidebarView).render();

      // add .page-header DOM
      this.createView('header', HeaderView).render();

      // add .container-default DOM
      if (callback) callback();

      // add .footer DOM
      this.createView('footer', FooterView).render();

      // add .sidepanel DOM
      this.createView('sidepanel', sidepanelView).render();
    },

    clean: function clean() {
    }

  });

  return LayoutView;
});
