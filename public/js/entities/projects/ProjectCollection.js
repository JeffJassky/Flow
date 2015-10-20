App.module('Entities.Projects', function(Projects, App) {
    'use strict';

    var initialProjects = [{"name":"Groceries","completed":false,"hasChildren":true,"projects":[{"name":"Bread","completed":false,"hasChildren":false,"projects":[]},{"name":"Produce","completed":false,"hasChildren":true,"projects":[{"name":"Bananas","completed":false,"hasChildren":false,"projects":[]},{"name":"Peppers","completed":false,"hasChildren":false,"projects":[]}]}]},{"name":"Work Stuff","completed":false,"hasChildren":true,"projects":[{"name":"Email Joe that thing","completed":false,"hasChildren":false,"projects":[]}]}];

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
                this.reset(initialProjects); // reset with one empty task
            }
        }
    });
    
});