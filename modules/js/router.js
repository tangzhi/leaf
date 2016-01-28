define([
    'jquery',
    'underscore',
    'backbone',
    'js/views/home/login'
], function($, _, Backbone, LoginView){
    var AppRouter = Backbone.Router.extend({
        initialize: function (e) {
            this.engine = e;
        },
        
        routes: {
            'login.html': 'login',
            '':'noLogin',
            ':nofound': 'noLogin'
        },
        /*
        dispatcher: function(View){
            var that = this;
            return function(name){
                var args = Array.prototype.slice.call(arguments, 1);
                console.log('arguments:',arguments, 'args:', args);
                that.engine.renderMainView(View, args);
            };
        }
        */
        noLogin: function(operation) {
            console.log('noLogin:', operation);
            Backbone.history.navigate('/login.html', {trigger: true});
        }
    });

    var router = {};
    var initialize = function(options){
        var engine = options.engine;

        router = new AppRouter(engine);
        engine.router = router;

        router.on('route:login', function() {
            console.log('route:login');
            engine.renderMainView(LoginView);
        });

    };

    return {
        initialize: initialize,
        router: router
    };
});
