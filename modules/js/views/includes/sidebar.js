define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/widgets/menus',
  'js/collections/menuitems'
], function header($, _, Backbone, MenuView, MenuItems) {
  var SidebarView = Backbone.View.extend({

    el: '.sidebar',

    initialize: function initialize() {
      this.bookmarkItems = new MenuItems();
      this.mainItems = new MenuItems();
      this.systemItems = new MenuItems();
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

    buildBookmarkMenu: function buildBookmarkMenu() {
      var view = new MenuView({
        caption: 'BOOKMARK',
        collection: this.bookmarkItems
      });

      this.bookmarkItems.reset([
        {
          icon_class: 'fa fa-home',
          icon_color: 'color5',
          item_href: 'index.html',
          item_active: true,
          item_name: '首页'
        }
      ]);
      return view;
    },

    buildMainMenu: function buildMainMenu() {
      this.mainMenu = new MenuView({
        caption: 'MAIN',
        collection: this.mainItems
      });

      return this.mainMenu;
    },

    buildSystemMenu: function buildSystemMenu() {
      var view = new MenuView({
        caption: 'SYSTEM',
        collection: this.systemItems
      });

      this.systemItems.reset([
        {
          icon_class: 'fa fa-inbox',
          item_href: 'inbox.html',
          item_name: '系统消息',
          label_type: 'danger',
          label: '3'
        },
        {
          icon_class: 'fa fa-lock',
          item_href: 'lockscreen.html',
          item_name: '锁屏'
        },
        {
          icon_class: 'fa fa-wrench',
          item_href: 'change-password.html',
          item_name: '密码变更'
        },
        {
          icon_class: 'fa fa-power-off',
          item_href: 'logout.html',
          item_name: '退出系统'
        }
      ]);

      return view;
    },

    render: function render() {
      console.log('SidebarView render');

      // 添加页面Dom
      this.$el.html('');
      this.$el.append(this.buildBookmarkMenu().render().el);
      this.$el.append(this.buildMainMenu().render().el);
      this.$el.append(this.buildSystemMenu().render().el);
    },

    clean: function clean() {
    }

  });

  return SidebarView;
});
