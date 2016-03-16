define([
  'jquery',
  'underscore',
  'backbone',
  'js/collections/tiles'
], function main($, _, Backbone, tiles) {
  var TileView = Backbone.View.extend({

    className: 'tile',

    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
    },

    events: {
      'click div': 'itemClick'
    },

    itemClick: function click() {
      var oldModel = window.LeafEngine.getView('sidebar').mainItems.currentModel;
      if (oldModel === this.model) {
        return;
      }

      oldModel.set('selected', false);
      oldModel.set('checked', false);

      this.model.set('selected', true);
      this.model.set('checked', true);
    },

    render: function render() {
      var tileTemplate = require('templates/widgets/tile.hbs');
      this.$el.html(tileTemplate(this.model.toJSON()));
      this.$el.removeClass().addClass('tile');
      this.$el.addClass(this.model.get('bg_color')).addClass(this.model.get('type'));
      this.$el.toggleClass('selected', this.model.get('selected'));
      if (this.model.get('checked')) {
        window
          .LeafEngine
          .getView('sidebar')
          .mainItems
          .reset(this.model.toJSON()['menu-items']);
        window.LeafEngine.getView('sidebar').mainItems.currentModel = this.model;
      }
      return this;
    }

  });

  var TilesView = Backbone.View.extend({

    className: 'tiles',

    initialize: function initialize() {
      this.listenTo(tiles, 'add', this.addOne);
      this.listenTo(tiles, 'reset', this.addAll);
      // this.listenTo(tiles, 'all', this.render);
      tiles.fetch();
    },

    render: function render() {
      return this;
    },

    addOne: function addOne(tile) {
      var view = new TileView({ model: tile });
      this.$el.append(view.render().el);
      console.log('tiles addOne');
    },

    addAll: function addAll() {
      this.$el.html('');
      tiles.each(this.addOne, this);
      console.log('tiles addAll');
    }

  });

  return TilesView;
});
