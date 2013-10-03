var Backbone = require('backbone');
var _ = require('underscore');

var User = Backbone.Model.extend({

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
    },
    
    addAge: function() {
        this.set('age', this.get('age') + 1);
    }
    
    
});


module.exports = User;