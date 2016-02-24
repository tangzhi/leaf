define([
  'jquery',
  'underscore',
  'backbone'
], function header($, _, Backbone) {
  var SidebarView = Backbone.View.extend({

    el: '.sidebar',

    initialize: function initialize() {
    },

    events: {
      'click .nav > li > a': 'menuItemClick'
    },

    menuItemClick: function itemClick(ev) {
      ev.preventDefault();

      if (!$(ev.target).hasClass('active')) {
        $('.nav li ul').slideUp();
        $('.nav li a').removeClass('active');

        $(ev.target).addClass('active');
      }

      $(ev.target).next().slideToggle();
    },

    render: function render() {
      console.log('SidebarView render');

      // 添加页面Dom
      this.$el.html(require('html!templates/includes/sidebar.html'));
    },

    clean: function clean() {
    }

  });

  return SidebarView;
});
