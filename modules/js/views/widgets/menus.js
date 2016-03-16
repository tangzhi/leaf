define([
  'jquery',
  'underscore',
  'backbone',
  'js/collections/menuitems'
], function main($, _, Backbone, MenuItems) {
  var ItemView = Backbone.View.extend({

    tagName: 'li',

    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function render() {
      var itemTemplate = require('templates/widgets/menuitem.hbs');
      this.$el.html(itemTemplate(this.model.toJSON()));
      return this;
    }

  });

  var MenuView = Backbone.View.extend({

    tagName: 'ul',
    className: 'sidebar-panel nav',

    initialize: function initialize(options) {
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'reset', this.addAll);
      // this.listenTo(tiles, 'all', this.render);
      this.caption = options.caption;
      this.addCaption();
    },

    render: function render() {
      return this;
    },

    addCaption: function addCaption() {
      if (this.caption) {
        this.$el.append('<li class="sidetitle">' + this.caption + '</li>');
      }
      console.log('menu addCaption:', this.caption);
    },

    addOne: function addOne(item) {
      var view = new ItemView({ model: item });
      this.$el.append(view.render().el);
      console.log('menu addOne');
    },

    addAll: function addAll() {
      this.$el.html('');
      this.addCaption();
      this.collection.each(this.addOne, this);
      console.log('menu addAll');
    }

  });

  return MenuView;
});
