App.module('Router', function(Router, App, Backbone, Marionette) {
    'use strict';

    Router.onStart = function() {
        App.router = new AppRouter();
        if(!Backbone.history.start()) {
            console.warn('Hit undefined page route. Throwing up the 404');
            App.Parse.Controller.index('goals');
        }
    };

    var AppRouter = Marionette.AppRouter.extend({
        appRoutes: {
            '': 'organize'
        },
        controller: {
            organize: function(){
                console.log('Hit organize route');
                App.Projects.Controller.organize();
            }
        },
    });

});
