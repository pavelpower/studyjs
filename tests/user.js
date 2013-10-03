/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.

 * */
var _ = require('underscore');
var User = require('../models/user');

// create object user
var user = new User({ name: 'Alexey', age: 31 });

var age = user.get('age');

if ( ! _.isFunction(user.addAge) )
    throw 'not found method addAge in user object'

user.addAge();

if (age !== user.get('age') + 1) 
    throw 'age is not added';