App.module('Entities.Projects', function(Projects, App) {
    'use strict';

    Projects.ProjectCollection = Backbone.Collection.extend({
        model: App.Entities.Projects.ProjectModel
    });
    
});