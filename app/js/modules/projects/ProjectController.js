App.module('Projects', function(Projects, App){
    'use strict';

    Projects.Controller = {
        organize: function(objectType) {
            App.mainContainer.show(
                new Projects.ProjectViews.RootList({
                    collection: App.data.projectsCollection
                })
            );
        }
    };
});
