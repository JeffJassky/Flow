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

            // Draggable Interactions
            // 'mousedown > span.handle': 'onHandleMousedown',
            // 'mousemove > span.handle': 'onHandleMousemove',
            // 'mouseup > span.handle': 'onHandleMouseup',

            // Droppable Interactions
        },

        // ========================
        // BUILT IN EVENTS
        // ========================
        initialize: function(){
            this.collection = this.model.projects;
            this.onHasChildrenChanged();
        },
        onShow: function(){
            var view = this;
            view.options.rootView().updateColors();
            view.$el.draggable({
                revert: true,
                // helper: function(e){
                //     return view.getDraggableClone.call(view, e);
                // },
                start: function(e){
                    return view.onDragStart.call(view, e);
                },
                stop: function(e){
                    return view.onDragStop.call(view, e);
                }
            }).droppable({
                greedy: true,
                tolerance: 'pointer',
                hoverClass: 'drag-hover',
                drop: function(e){
                    return view.onDrop.call(view, e);
                },
                over: function(e){
                    return view.onOver.call(view, e);
                },
                out: function(e){
                    return view.onOut.call(view, e);
                }
            });
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
        // DRAGGABLE EVENTS
        // ========================
        getDraggableClone: function(e){
            var original = $(e.currentTarget);
            return original.clone().addClass('draggable-clone').css('width', original.width());
        },
        onDragStart: function(e){
            this.$el.addClass('placeholder-outgoing');
        },
        onDragStop: function(e){
            this.$el.removeClass('placeholder-outgoing');
        },

        // ========================
        // DROPPABLE EVENTS
        // ========================
        onDrop: function(e){
            this.removeIncomingPlaceholder();
        },
        onOver: function(e){
            this.createIncomingPlaceholder();
        },
        onOut: function(e){
            this.removeIncomingPlaceholder();
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
        // ORGANIZING METHODS
        // ========================
        createIncomingPlaceholder: function(){
            var placehlder = $('<li />').addClass('placeholder-incoming');
            this.$el.after(placehlder);
        },
        removeIncomingPlaceholder: function(){
            this.$el.siblings('.placeholder-incoming').remove();
        }

    });

    ProjectViews.RootList = Backbone.Marionette.CollectionView.extend({
        tagName: 'ol',
        childView: ProjectViews.Project,
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
            this.$el.find('ol').each(function(index, list){
                $(list).removeClass().addClass('list-color-' + ((index % 6) + 1));
            });
        },
        onShow: function(){
            this.updateColors();
        }
    });

});