define([
    'jquery',
    'underscore',
    'backbone',
    'js/models/session',
    'form-serializer/dist/jquery.serialize-object.min'
], function($, _, Backbone, Session){

    var LoginView = Backbone.View.extend({

        el: 'body',

        // 默认值为 null
        // getLayout: function() {
        //     return null;
        // },

        initialize: function() {

        },

        events: {
          'submit .login-form': 'login'
        },

        login: function(ev) {
            //阻止默认提交
            ev.preventDefault();

            //
            var form = $('form,.login-form');
            var data = form.serializeObject();
            console.log('data:', JSON.stringify(data));
            Session.login(data, function (resp) {
                console.log('login success. auth:', resp.get('auth'));
                if(resp.get('auth')) {
                    //
                    if (resp.get('menu-right')) {
                        _.each(resp.get('menu-right'), function(item){
                            console.log("menu-right:", item.route, item.name, item.view);
                            LeafEngine.loadRoute(item.route, item.name, item.view);
                        });
                    }
                    Backbone.history.navigate('/404.html', {trigger: true});
                } else {
                    //that.$el.find('.alert').text(session.get('error')).slideDown(200);
                }
            });
        },

        render: function() {
            console.log('LoginView render');

            //设置body的背景色
            this.bodyBackGroundColor = $('body').css('background-color');
            $('body').css("background-color","#F5F5F5");

            //添加页面上选择框式样 awesome-bootstrap-checkbox
            require('style!css!awesome-bootstrap-checkbox');

            //添加页面Dom
            this.$el.html(require('html!templates/home/login.html'));
        },

        clean: function() {
            //恢复body的背景色
            $('body').css('background-color"', this.bodyBackGroundColor);
        }

    });

    return LoginView;
});
