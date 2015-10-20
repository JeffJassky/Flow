App.module('Projects', function(Projects, App){
    'use strict';

    Projects.Controller = {
        organize: function(objectType) {
            App.Layouts.Controller.switch('admin');
            App.mainContainer.currentView.main.show(
                new Projects.ProjectViews.RootList({
                    collection: App.data.projectsCollection
                })
            );
        }
    };

});