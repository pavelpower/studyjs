/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.

 * */
var _ = require('underscore');
var User = require('../models/user');

// create object user
var user = new User({ name: 'Alexey', age: 31 });

var age = user.get('age');

var position = user.get('position');

if ( ! _.isFunction(user.addAge) )
    throw 'not found method addAge in user object';

user.addAge();

if (age + 1 !== user.get('age')) 
    throw 'age is not added';
    
if (position === user.get('position'))
    throw 'position is not changed';