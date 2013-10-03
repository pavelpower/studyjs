var Backbone = require('backbone');
var _ = require('underscore');

var User = Backbone.Model.extend({
    
    constructor: function() {
        Backbone.Model.apply(this, arguments);
    },
    
    validate: function(attrs, options) {
        
       if ( !_.isString(attrs.name)) {
         return "Имя должно быть строкой";
       }
       
       if ( !_.isNumber(attrs.age) ) {
           return "Возраст должен быть целочисленным выражением";
       }
       
       if ( !_.isString(attrs.position) ) {
           return "";
       }
     }
});


module.exports = User;