	$(function(){
		var currentData = localStorage.getItem("projects");
		if(currentData){
			$('#projects').html(currentData);
		}

		var currentItem = null;

		var applyClasses = function(){
			var lis = $('li');
			lis.removeClass('actionable category');
			var categories = lis.has('ul').addClass('category');
			var actions = lis.not(categories).addClass('actionable');

			$('#projects ul').each(function(index, item){
				$(item).removeClass().addClass('list-color-' + ((index % 4) + 1));
			})
		};

		var options = {
			placeholderClass: 'placeholder',
			hintClass: 'hint',
			hintWrapperClass: 'hint-wrapper',
			isAllowed: function(cEl, hint, target){
				return true;
			},
			ignoreClass: 'clickable',
			complete: function($el){
				// Configure appropriate classes
				applyClasses();
				save();
			}
		};

		// Setup
		$('#projects > ul').sortableLists(options);
		applyClasses();
		$('textarea.clickable').textareaAutoSize();
		currentItem = $('#projects li:first');

		$(document).on("keypress", "textarea.clickable", function(e){
			var textarea = $(e.target);
			if(e.keyCode === 13){
				e.preventDefault();
				textarea.blur();
				add();
			}else if(e.keyCode === 96){
				if(!textarea.val().length){
					// indent this one
				}
			}
		});

		$(document).on("focus", "textarea.clickable", function(e){
			var item = $(e.target).closest('li');
			if(!item.hasClass('new')){
				currentItem = item;
			}
		});

		$(document).on("blur", "textarea.clickable", function(e){
			var item = $(e.target).closest('li');
			if($(e.target).val().length === 0){
				// All text deleted. Remove element
				item.find('.handle').remove();
				item.slideUp(null, function(){
					$(this).remove();

				});
			}else{
				item.removeClass('new');
				currentItem = item;
			}
		});

		$(document).on("change", ":checkbox", function(e){
			var checkbox = $(e.target),
				parent = checkbox.closest('li');
			if(checkbox.is(':checked')){
				parent.addClass('complete');
			}else{
				parent.removeClass('complete');
			}
		});


		$(document).on("change", ":input", function(){
			$(this).text($(this).val());
			saveLocal();
		});


		var save = function(actuallyDoIt){
			saveLocal();
			// if(actuallyDoIt){
			// 	$.ajax({
			// 		type: "POST",
			// 		url: '/projects/sort',
			// 		data: {
			// 			data: sortableListsToHierarchy($('#projects > ul'))
			// 		},
			// 		success: function(){

			// 		},
			// 		dataType: 'json'
			// 	});
			// }
		};


		var saveLocal = function(actuallyDoIt){
			localStorage.setItem("projects", $('#projects').cleanWhitespace().html());
		};

		var add = function(){
			var newItem = currentItem.clone(), // create new object
				textarea = newItem.find('textarea');
			newItem.attr('id', null); // remove ID
			newItem.find('ul').remove(); // Remove children
			textarea.val(''); // Remove value
			newItem.removeClass('category').addClass('new actionable');
			currentItem.after(newItem); // Append to list
			textarea.focus(); //Focus on it
		};


		var sortableListsToHierarchy = function(ul) {
			var arr = [],
				order = 0;
			ul.children('li').each( function() {
				var li = $(this),
					listItem = {},
					id = li.attr('id') ? li.attr('id').replace('item_','') : null;
				listItem.id = id;
				listItem.name = li.children('div').children('textarea').val();
				listItem.order = order;
				arr.push(listItem);
				listItem.children = sortableListsToHierarchy(li.children('ul,ol'));
				order++;
			});
			return arr;
		};

		jQuery.fn.cleanWhitespace = function() {
		    textNodes = this.contents().filter(
		        function() { return (this.nodeType == 3 && !/\S/.test(this.nodeValue)); })
		        .remove();
		    return this;
		}

	});