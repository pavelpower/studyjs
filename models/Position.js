var Backbone, _;

Backbone = require('backbone');
_ = require('underscore');

var Position = Backbone.Model.extend({
    
    validate: function(attrs, options) {
        
       if ( !_.isString(attrs.name) ) {
         return "Наименование позиции должно быть строкой";
       }
       
       if ( !_.isNumber(attrs.price) ) {
           return "Велечина оклада должна быть указана числом";
       }
    }
    
});

module.exports = Position;

