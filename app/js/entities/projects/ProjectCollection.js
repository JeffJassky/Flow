App.module('Entities.Projects', function(Projects, App) {
    'use strict';

    Projects.ProjectCollection = Backbone.Collection.extend({
        model: App.Entities.Projects.ProjectModel,
        serialize: function(){
        	var array = [];
        	this.each(function(model){
        		array.push(model.serialize());
        	});
        	return array;
        },
        save: function(){
        	localStorage.setItem("projects", this.serialize());
        },
        fetch: function(){
        	this.reset(localStorage.getItem('projects'));
        }
    });
    
});