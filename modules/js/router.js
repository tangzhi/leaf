define([
  'jquery',
  'underscore',
  'backbone',
  'js/views/home/login'
], function leafRouter($, _, Backbone, LoginView) {
  var pageBeforeLogin;
  var AppRouter = Backbone.Router.extend({
    initialize: function initialize(e) {
      this.engine = e;
    },

    routes: {
      'login.html': 'login',
      '': 'noLogin',
      ':nofound': 'noLogin'
    },

    noLogin: function noLogin(operation) {
      console.log('noLogin:', operation);
      pageBeforeLogin = operation;
      Backbone.history.navigate('/login.html', true);
    }
  });

  var router = {};
  var initialize = function initialize(options) {
    var engine = options.engine;

    router = new AppRouter(engine);
    engine.router = router;
    console.log('engine.router = router');

    router.on('route:login', function login() {
      console.log('route:login');
      engine.renderMainView(LoginView, { prePage: pageBeforeLogin });
      pageBeforeLogin = null;
    });
  };

  return {
    initialize: initialize,
    router: router
  };
});
