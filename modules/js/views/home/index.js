define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/widgets/tiles'
], function home($, _, Backbone, TilesView) {
  var HomeView = Backbone.View.extend({

    el: '.container-default',

    initialize: function initialize() {
    },

    events: {
    },

    render: function render() {
      // 添加页面Dom
      var tiles = new TilesView();
      this.$el.html('');
      this.$el.append(tiles.render().el);
      this.$el.append('<br><br><br><br><br><br><br><br><br><br>');
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
