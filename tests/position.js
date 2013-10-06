var _ = require('underscore');
var Position = require('../models/position');

// проверяем наличие существования класса
if ( _.isNull(Position) )
    throw 'Class Position in not defined';
    
// проверяем действительно ли Position кдасс
// для этого надо убедится, что Position это функция
if ( !_.isFunction(Position) )
    throw 'Varible Postition is not Class (function constructor)';
    
// т.к. За появление полей у нас отвечает Backbone, то заранее
// в Класс поля не надо прописывать, там можно прописывать только
// дефолтные значения http://backbonejs.org/#Model-defaults
// а так свойства задаются при создании объекта
var position = new Position({ name: 'Director', prise: 100000 });
    
// вот это конечно глупая проверка
// потому, что после исполнения оператора "new"
// всегда будет создан объект
if ( !_.isObject(position) )
    throw 'position is not a Object';
    
// а вот это не глупая проверка
// она проверяет действительно ли конструктор вернул нам
// объект класса Position
// т.к. есть способ вренуть в результат выплнения оператора new
// совсем другой бъект, а не тот который является экземпляром нашего класса
// Пример того как можно обмануть new - смотри в файле:
// tests/test.js
if ( !position instanceof Position )
    throw 'object position is not the instance of class Position';
    
// Способ проверить есть ли свойство name 
// в Bacbone модели свойства переданные в контруктор находятся в 
// хеше attributes
// там и проверяем наличие их, и соответствие типу
if ( !_.isString(position.attributes.name) )
    throw 'name is not a string';
    
if (! _.isNumber(position.attributes.prise) )
    throw 'price is not a number';
    
// Дальше пойдет способ проверки функции валидации
position.set('name', null);
if ( position.isValid() ) 
    throw 'funciton validate is not work for property name';

position.set('name', 0);
if ( position.isValid() ) 
    throw 'funciton validate is not work for property name';

// про свойство "unset" читать тут http://backbonejs.org/#Model-unset
position.unset('name');
if ( position.isValid() ) 
    throw 'funciton validate is not work for property name';
    
position.set('name', 'Vasya');
if ( !position.isValid() )
    throw 'funciton validate is not work for property name';
    
// validate property price
position.set('price', null);
if ( position.isValid() ) 
    throw 'funciton validate is not work for property price';

position.set('price', '1234');
if ( position.isValid() ) 
    throw 'funciton validate is not work for property price';

position.unset('price');
if ( position.isValid() ) 
    throw 'funciton validate is not work for property price';
    
position.set('price', 10234);
if ( !position.isValid() )
    throw 'funciton validate is not work for property price';

