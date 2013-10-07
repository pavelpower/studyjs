var _ = require('underscore');
 
var PositionsCollection = require('../models/PositionsCollection');

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
        name: 'Ulo',
        price: '70000'
    },
    //pavel: я бы еще в тест добавил не валидные модели по имени
    {
        name: 0,
        price: '70000'
    }
    ]);

// to chek up if positionsCollection is the instance of class PositionsCollection
if ( !positionsCollection instanceof PositionsCollection )
throw 'object positionsCollection is not the instance of class PositionsCollection';

// to test the data
//pavel: откроую тебе сикрет, у колекций есть куча методов типа each, map, where
//pavel: http://underscorejs.org/#collections
positionsCollection.each(function(position) {
    console.log(position.get('name'), position.get('price'));
});
//pavel: есть еще интересные методы типа pluck
console.log(positionsCollection.pluck('name').join('|'));

