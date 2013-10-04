var _ = require('underscore');
 
var PositionsCollection = require('../models/collection');

// to check up if PositionsCollection exists
if ( _.isNull(PositionsCollection) )
    throw 'Class PositionsCollection in not defined';
    
var positionsCollection = new PositionsCollection([
    {
        name: 'Director',
        prise: 100000
    },
    {
        name: 'Programmist',
        prise: 80000
    },
    {
        name: 'Manager',
        price: 90000
    },
    {
        name: 'SEO',
        price: '75000'
    },
    
    {
        name: 'Ulo', //WTF?
        price: '70000'
    }
    ]);

// to chek up if positionsCollection is the instance of class PositionsCollection
if ( !positionsCollection instanceof PositionsCollection )
throw 'object positionsCollection is not the instance of class PositionsCollection';

// to test the data
var i = 1;
var clNomber;
for (; i <=5; i++) {
                clNomber = 'c' + i;
                console.log(positionsCollection.get(clNomber));
            };

