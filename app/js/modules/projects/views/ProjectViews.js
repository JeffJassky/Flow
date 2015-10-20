App.module('Projects.ProjectViews', function(ProjectViews, App, Backbone){
    'use strict';

    ProjectViews.Project = Backbone.Marionette.CompositeView.extend({
        tagName: 'li',
        template: App.templates['projects/project'],
        // model: App.Entities.Projects.ProjectModel,
        // collection: App.Entities.Projects.ProjectCollection,
        childViewContainer: 'ol',
        childViewOptions: function(){
            var view = this;
            return {
                parentView: function(){
                    return view;
                },
                rootView: function(){
                    return view.options.rootView();
                }
            };
        },
        modelEvents: {
            'change:name': 'render',
            'change:completed': 'render',
            'change:hasChildren': 'onHasChildrenChanged'
        },
        ui:{
            textarea: 'textarea',
            checkbox: ':checkbox',
            handle: 'span.handle',
            projects: 'ol'
        },
        events: {
            // Form Interactions
            'keypress > div textarea': 'onTextareaKeyPress',
            'keydown > div textarea': 'onTextareaKeyDown',
            'blur > div textarea': 'onTextareaBlur',
            'change > div textarea': 'onTextareaChange',
            'change > :checkbox': 'onCheckboxChange',
        },

        // ========================
        // BUILT IN EVENTS
        // ========================
        initialize: function(){
            this.collection = this.model.projects;
            this.onHasChildrenChanged();
            this.options.rootView().childViewIndex[this.cid] = this; // Add this view to global index
        },
        onRender: function(){
            this.$el.attr('data-cid', this.cid);
        },
        onShow: function(){
            var view = this;
            view.options.rootView().updateColors();
        },
        onBeforeDestroy: function(){
            delete this.options.rootView().childViewIndex[this.cid]; // Remove this view from global index
        },

        // ========================
        // FORM EVENTS
        // ========================

        onTextareaKeyPress: function(e){
            if(e.keyCode === 13){ // Enter key was pressed
                e.preventDefault();
                this.createSibling();
            }
        },
        onTextareaKeyDown: function(e){
            if(e.keyCode === 9 && this.ui.textarea.val().length === 0){ // Tab key was pressed
                e.preventDefault();
                this.model.destroy();
                this.createPreviousSiblingsChild();
            }
        },
        onTextareaChange: function(){
            this.model.set('name', this.ui.textarea.val());
        },
        onTextareaBlur: function(){
            if(this.model.get('name').length === 0){
                this.model.destroy();
            }
        },
        onCheckboxChange: function(){
            this.model.set('completed', this.ui.checkbox.is('checked'));
        },

        // ========================
        // DATA EVENTS
        // ========================

        onHasChildrenChanged: function(){
            if(this.model.get('hasChildren')){
                this.$el.addClass('category').removeClass('actionable');
            }else{
                this.$el.addClass('actionable').removeClass('category');
            }
        },


        // ========================
        // CREATION METHODS
        // ========================

        createChild: function(){
            this.collection.add({});
        },
        createSibling: function(){
            var siblingModel = this.options.parentView().collection.add({}, {at: this._index + 1});
            this.options.parentView().children.findByModel(siblingModel).ui.textarea.focus();
        },
        createPreviousSiblingsChild: function(){
            var previousSibling = this.options.parentView().children.findByIndex(this._index - 1);
            if(previousSibling){
                previousSibling.createChild();
                previousSibling.children.last().ui.textarea.focus();
            }
        },

        // ========================
        // REORGANIZING METHODS
        // ========================
        removeChildModel: function(model){
            this.collection.remove(model);
        },
        addChildModel: function(model, index){
            this.collection.add(model, {at: index});
        }
    });

    ProjectViews.RootList = Backbone.Marionette.CollectionView.extend({
        id: 'project-root',
        tagName: 'ol',
        childView: ProjectViews.Project,
        childViewIndex: {},
        dragging: {
            view: null,
            originalParent: null,
            newParent: null 
        },
        childViewOptions: function(){
            var view = this;
            return {
                parentView: function(){
                    return view;
                },
                rootView: function(){
                    return view;
                }
            };
        },
        updateColors: function(){
            this.$el.find('li').parents('ol').each(function(index, list){
                $(list).removeClass().addClass('list-color-' + ((index % 6) + 1));
            });
        },
        onShow: function(){
            this.updateColors();
        },
        onRender: function(){
            var rootView = this;
            var options = {
                placeholderClass: 'placeholder',
                hintClass: 'hint',
                hintWrapperClass: 'hint-wrapper',
                isAllowed: function(cEl, hint, target){
                    // console.log(cEl, hint, target);
                    return hint.parent().prop("tagName") == 'OL';
                    return $(target).hasClass('sortableListsOpen');
                },
                ignoreClass: 'clickable',
                onDragStart: function(e, $el){
                    // Cache the view being dragged and the parent that it came from
                    rootView.dragging.view = rootView.childViewIndex[$el.data('cid')];
                    rootView.dragging.originalParent = rootView.childViewIndex[$el.parent().closest('li').data('cid')] || rootView;
                    console.log("onDragStart:", rootView.dragging);
                },
                complete: function($el, index){
                    // Get the items new parent view
                    rootView.dragging.newParent = rootView.childViewIndex[$el.parent().closest('li').data('cid')] || rootView;
                    console.log("complete:", rootView.dragging);

                    // Move the model from one collection to another
                    var model = rootView.dragging.view.model;
                    rootView.dragging.originalParent.removeChildModel(model);
                    rootView.dragging.newParent.addChildModel(model, index);

                    // Reset the dragged view
                    rootView.dragging.view = null;
                    rootView.dragging.originalParent = null;
                    rootView.dragging.newParentView = null;
                }
            };

            // Setup
            this.$el.sortableLists(options);
        },

        // ========================
        // REORGANIZING METHODS
        // ========================
        removeChildModel: function(model){
            this.collection.remove(model);
        },
        addChildModel: function(model, index){
            this.collection.add(model, {at: index});
        }
    });

});