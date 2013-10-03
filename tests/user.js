/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.

 * */
var User = require('../models/user.js');
var user = new User({ name: 3242 });

user.on("invalid", function(model, error) {
  console.log(model.get("name") + " " + error);
});

user.on("invalid", function(model, error) {
  console.log("bla blab bla" + error);
});

//user.trigger('invalid', user, 'asdsdasd');

console.log('begin');

user.save();

user.on('change:name', function(model, value) {
    console.log('change:name', value);
});

user.set('name', 'Vasya');
user.set({ name: 'Oleg' });

user.destroy();
