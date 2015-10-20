'use strict';
$(document).ready(function() {
    App.start();
});

Handlebars.registerHelper('isnot', function(variable, value, options){
    if(variable != value){
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});
Handlebars.registerHelper('log', function(variable){
    console.log(variable);
});