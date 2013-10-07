var Backbone = require('backbone');

var _ = require('underscore');
var Position = require('../models/Position');

var PositionsCollection = Backbone.Collection.extend({

    model: Position
    
});

module.exports = PositionsCollection;