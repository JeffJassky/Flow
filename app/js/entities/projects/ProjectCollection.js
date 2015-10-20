App.module('Entities.Projects', function(Projects, App) {
    'use strict';

    Projects.ProjectCollection = Backbone.Collection.extend({
        model: App.Entities.Projects.ProjectModel,
        initialize: function(){
            this.listenTo(this, 'change add remove', this.save);
        },
        serialize: function(){
        	var array = [];
        	this.each(function(model){
        		array.push(model.serialize());
        	});
        	return array;
        },
        save: function(){
        	localStorage.setItem("projects",
                JSON.stringify(
                    App.data.projectsCollection.serialize()
                )
            );
        },
        fetch: function(){
            var localCache = JSON.parse(localStorage.getItem('projects'));
            if(localCache && localCache.length > 0){
                this.reset(localCache); // reset with local cache
            }else{
                this.reset([{}]); // reset with one empty task
            }
        }
    });
    
});