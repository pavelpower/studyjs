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
    setName: function(name) {
	this.name = name;
	},
    setAge: function(age) {
        this.age = age;
         },
    setPosition: function (pos) {
        this.position = pos;
         },
    addAge: function(pos) {
        this.position = pos;
        (this.age++)
    } 
});


module.exports = User;