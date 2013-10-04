var _ = require('underscore');
 
var PositionsCollection = require('../models/collection');

// to check up if PositionsCollection exists
if ( _.isNull(PositionsCollection) )
    throw 'Class PositionsCollection in not defined';
    
// to check up if PositionsCollection is function
//if ( _.isFunction(PositionsCollection) ) 
//    throw 'Varible PositionsCollection is not Class (function constructor)';
    
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
    
    if ( !positionsCollection instanceof PositionsCollection )
    throw 'object position is not the instance of class Position';
    
    console.log(positionsCollection.get('c5'));
