App.module('Projects.ProjectViews', function(ProjectViews, App, Backbone){
    'use strict';

    ProjectViews.Project = Backbone.Marionette.CompositeView.extend({
        tagName: 'li',
        template: App.templates['projects/project'],
        model: App.Entities.Projects.ProjectModel,
        collectionView: null,
        ui:{
            textarea: 'textarea',
            checkbox: ':checkbox',
            handle: 'span.handle'
        },
        regions: {
            projects: 'ol'
        },
        events: {
            // Form Interactions
            'keypress textarea': 'onTextareaKeyPress',
            'focus textarea': 'onTextareaFocus',
            'change textarea': 'onTextareaChange',
            'blur textarea': 'onTextareaBlur',
            'change :checkbox': 'onCheckboxChange',

            // Handle interactions
            'mousedown handle': 'onHandleMousedown',
            'mouseup handle': 'onHandleMouseup'
        },
        onTextareaKeyPress: function(e){
        }
    });

    ProjectViews.RootList = Backbone.Marionette.CollectionView.extend({
        tagName: 'ol',
        childView: ProjectViews.Project
    });

});