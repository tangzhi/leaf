require('style!css!font-awesome/css/font-awesome.min.css');
require('style!css!bootstrap/../../css/bootstrap.min.css');

require('style!css!css/style.css');
require('style!css!css/responsive.css');
require('style!css!css/shortcuts.css');

require(['js/engine', 'js/router'], function main(Engine, Router) {
  Engine.initialize();
  Router.initialize({ engine: Engine });
  Engine.start();
});
