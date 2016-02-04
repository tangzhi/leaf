define([
  'jquery',
  'underscore',
  'backbone',
  'js/engine',
  'js/models/auth',
  'form-serializer/dist/jquery.serialize-object.min'
], function loginView($, _, Backbone, LeafEngine, Auth) {
  var LoginView = Backbone.View.extend({

    el: 'body',

    initialize: function initialize() {
    },

    events: {
      'submit .login-form': 'login'
    },

    login: function login(ev) {
      var form = $('form');
      var data = form.serializeObject();

      // 阻止默认提交
      ev.preventDefault();

      //
      console.log('data:', JSON.stringify(data));
      Auth.login(data, function callback(model) {
        console.log('login success. auth:', model.get('auth'), model);
        if (model.get('auth')) {
          //
          LeafEngine.loadRoute(model.get('menu-right'));
          Backbone.history.navigate('/index.html', { trigger: true });
        } else {
          // that.$el.find('.alert').text(session.get('error')).slideDown(200);
        }
      });
    },

    render: function render() {
      console.log('LoginView render');

      // 设置body的背景色
      $('body').css('background-color', '#F5F5F5');

      // 添加页面上选择框式样 awesome-bootstrap-checkbox
      require('style!css!awesome-bootstrap-checkbox');

      // 添加页面Dom
      this.$el.html(require('html!templates/home/login.html'));
    },

    clean: function clean() {
      // 恢复body的背景色
      $('body').css('background-color', '');
    }

  });

  return LoginView;
});
