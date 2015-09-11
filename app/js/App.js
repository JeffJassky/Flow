/* jshint globalstrict: true */
/* jshint camelcase: false */
'use strict';

var App = new Backbone.Marionette.Application({
    config: { },
    pushState:true,
    data: {
        projectsCollection: null,
        user: null
    },
    regions: {
        header: '#header',
        mainContainer: '#main-container'
    },
    onBeforeStart: function () {
        this.data.projectsCollection = new App.Entities.Projects.ProjectCollection();
        this.restoreLocalStorage();
    },
    onStart: function(){
        console.log('App started.');
    },
    restoreLocalStorage: function(){
        var projects = [
            {
                name: 'Item 1',
                projects: [
                    {
                        name: 'Item 2',
                        projects: [
                            {
                                name: 'Item 3'
                            }
                        ]
                    }
                ]
            }
        ];
        this.data.projectsCollection.reset(projects);
    }
});

//define where the behaviors are stored
Marionette.Behaviors.behaviorsLookup = function() {
    return ShoanyApp.Behaviors;
};
