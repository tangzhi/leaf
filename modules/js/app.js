require('style!css!font-awesome/css/font-awesome.min.css');
require('style!css!bootstrap/../../css/bootstrap.min.css');

require('style!css!css/style.css');
require('style!css!css/responsive.css');
require('style!css!css/shortcuts.css');

require([
    'js/engine',
    'js/router'
], function(Engine, Router){

    //测试时使用
    $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
        options.type = 'GET';
    });

    Engine.initialize();
    Router.initialize({engine : Engine});

    var root = '/';
    console.log("host:"+window.location.host);

    Backbone.history.start({
        pushState: true,
        root: root
    });

    //Engine.router.navigate(window.location.pathname, {trigger:true});
});
