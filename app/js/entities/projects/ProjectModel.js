App.module('Entities.Projects', function(Projects, App) {
    'use strict';

    Projects.ProjectModel = Backbone.Model.extend({
        idAttribute: 'id',
        defaults:{
            name: '',
            completed: false,
            hasChildren: false
        },
        projects: App.Entities.Projects.ProjectCollection,
        events: {
            'change': 'save'
        },

        // ========================
        // BUILT IN EVENTS
        // ========================
        initialize: function(){
            // Create the nested collection
            this.projects = new App.Entities.Projects.ProjectCollection();
            this.listenTo(this.projects, 'add remove reset', this.onChildrenChanged);

            if(this.get('projects')){
                // Set the nested data
                this.projects.reset(this.get('projects'));

                // Remove the unnecessary model property
                this.unset('projects');
            }
        },

        // ========================
        // DATA EVENTS
        // ========================
        onChildrenChanged: function(){
            this.set('hasChildren', this.projects.length ? true : false);
        },

        // ========================
        // MODEL METHODS
        // ========================
        serialize: function(){
            var data = this.toJSON();
            data.projects = this.projects.serialize();
            return data;
        },
        save: function(){
            this.data.projectsCollection.save();
        }
    });

});