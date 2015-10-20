App.module('Layouts.LayoutViews', function(LayoutViews, App, Backbone){
    'use strict';

    LayoutViews.Admin = Backbone.Marionette.LayoutView.extend({
        template: App.templates['layouts/admin'],
        id: "layout-view",
        regions: {
            main: 'section#main'
        }
    });

});