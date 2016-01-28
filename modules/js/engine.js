define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var views={};
    var LeafEngine ={};
    LeafEngine.views = views;
    window.LeafEngine = LeafEngine;

    var children;
    var currentLayout;

    var initialize = function() {

        $(document).ready(function(){

            $(document).on('click', '.sidebar-open-button', function(){
                if($('.sidebar').hasClass('hidden')){
                    $('.sidebar').removeClass('hidden');
                    $('.content').css({
                        'marginLeft' : 250
                    });
                }else{
                    $('.sidebar').addClass('hidden');
                    $('.content').css({
                        'marginLeft' : 0
                    });
                }
            });


        });


        $(document).on('click', 'a', function(e) {
            if ((typeof $(this).attr('href') !== 'undefined' && $(this).attr('href').substr(0, 4) === 'http') ||
                (typeof $(this).attr('href') !== 'undefined' && $(this).attr('href').substr(0, 4) === 'mail') ||
                typeof $(this).attr('href') !== 'undefined' && $(this).attr('href').substr(0, 1) === '#') {
                console.log('no catch url:', $(this).attr('href'));
            } else if (typeof $(this).attr('href') !== 'undefined') {
                //阻止默认操作
                e.preventDefault();
                //日志
                console.log('catch url:', $(this).attr('href'));
                //导航
                Backbone.history.navigate($(this).attr('href'), true);
                $(document).scrollTop(0);
            }
        });

    };

    var renderLayout = function(templateName, callback) {
        if (currentLayout !== undefined) {
            _.chain(views)
            .values()
            .each(function(view){
                if(typeof view.clean === 'function') {
                    view.clean();
                }
                view.undelegateEvents();
            });
        }

        if (templateName === null) {
            if (callback) callback();
            return;
        }

        require.ensure([], function(require) {
            var View = require('js/views/layout/'+templateName);
            var layout = createView('layout', View);
            layout.createView = createView;
            layout.render();
            if(callback) callback();
        });
    };

    var createView = function(name, View, options) {
        var view = views[name];
        if (view) {
            if(typeof view.clean === 'function') {
                view.clean();
            }
            view.undelegateEvents();
        }

        views[name] = new View(options);
        return views[name];
    };

    var renderMainView = function(View, options) {
        var view = createView('main', View, options);
        var layoutTemplate = view.getLayout !== undefined ? view.getLayout() : null;

        renderLayout(layoutTemplate, function() {
            view.render();
        });
    };

    var loadRoute = function(route, name, viewpath) {
        var that = this;
        this.router.route(route, name, function(){
            var args = arguments;
            require.ensure([], function(require){
                var view = require('js/views/'+viewpath);
                that.renderMainView(view, args);
            });
        });
    };

    _.extend(LeafEngine, {
        initialize: initialize,
        renderMainView: renderMainView,
        loadRoute: loadRoute
    });

    return LeafEngine;
});
