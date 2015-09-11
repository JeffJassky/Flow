App.module('Entities.Projects', function(Projects, App) {
    'use strict';

    Projects.ProjectModel = Backbone.Model.extend({
        idAttribute: 'id',
        defaults:{
            name: 'Project Name...'
        }
    });
    
});