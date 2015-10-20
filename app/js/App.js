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
        mainContainer: '#main-container'
    },
    onBeforeStart: function () {
        this.data.projectsCollection = new App.Entities.Projects.ProjectCollection();
        this.data.projectsCollection.fetch();
    },
    onStart: function(){
        console.log('App started.');
    }
});

//define where the behaviors are stored
Marionette.Behaviors.behaviorsLookup = function() {
    return ShoanyApp.Behaviors;
};
