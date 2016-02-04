define([
  'jquery',
  'underscore',
  'backbone',
  'js/models/auth'
], function leafEngine($, _, Backbone, Auth) {
  var views = {};
  var LeafEngine = {};
  var currentLayout;

  function initialize() {
    $.ajaxPrefilter(function c(options) {
      // Use withCredentials to send the server cookies
      // The server must allow this through response headers
      /* eslint-disable no-param-reassign */
      options.xhrFields = {
        withCredentials: true
      };
      /* eslint-enable no-param-reassign */
    });

    $(document).on('click', 'a[href]:not(.leaf-no-catch)', function b(e) {
      if (typeof $(this).attr('href') !== 'undefined') {
        // 阻止默认操作
        e.preventDefault();
        // 日志
        console.log('catch url:', $(this).attr('href'));
                // 导航
        Backbone.history.navigate($(this).attr('href'), true);
        $(document).scrollTop(0);
      } else {
        // 日志
        console.log('catch url:', $(this).attr('href'));
      }
    });
  }

  function createView(name, View, options) {
    var view = views[name];
    if (view) {
      if (typeof view.clean === 'function') {
        view.clean();
      }
      view.undelegateEvents();
    }

    views[name] = new View(options);
    return views[name];
  }

  function renderLayout(templateName, callback) {
    if (currentLayout !== undefined) {
      _
        .chain(views)
        .reverse()  /* 后建先删 */
        .each(function clean(view) {
          if (typeof view.clean === 'function') {
            view.clean();
          }
          view.undelegateEvents();
        });
    }

    if (templateName === null) {
      if (callback) callback();
      return;
    }

    require.ensure([], function render(require) {
      var View = require('js/views/layout/' + templateName);
      var layout = createView('layout', View);
      layout.createView = createView;
      layout.render(callback);
    });
  }

  function renderMainView(View, options) {
    var layoutTemplate = _.result(View, 'getLayout', null);

    renderLayout(layoutTemplate, function renderContent() {
      var view = createView('main', View, options);
      view.render();
    });
  }

  function loadRouteItem(route, name, viewpath) {
    var handle = viewpath === null ? _.noop : function callback() {
      var args = arguments;
      require.ensure([], function render(require) {
        var view = require('js/views/' + viewpath);
        renderMainView(view, args);
      });
    };
    LeafEngine.router.route(route, name, handle);
  }

  function loadRoute(list) {
    if (!_.isArray(list)) return;
    _
      .chain(list)
      .reverse()
      .each(function load(item) {
        console.log('menu-right:', item.route, item.name, item.view);
        loadRouteItem(item.route, item.name, item.view);
      });
  }

  function start() {
    Auth.getAuth(function check(model) {
      if (model.get('auth')) {
        loadRoute(model.get('menu-right'));
      }

      Backbone.history.start({
        pushState: true,
        root: '/'
      });
    });
    // Backbone.history.start({
    //   pushState: true,
    //   root: '/'
    // });
  }

  window.LeafEngine = LeafEngine;

  _.extend(LeafEngine, {
    views: views,
    initialize: initialize,
    renderMainView: renderMainView,
    loadRoute: loadRoute,
    start: start
  });
  console.log('--------------------------->>>');
  console.log('      LeafEngine Run');
  console.log('--------------------------->>>');
  return LeafEngine;
});
