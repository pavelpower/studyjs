// Тут опишу пример того как можно вернуть объект
// после выполнения оператора new не того который является
// экземпляром указанного класса

var Class = (function() {
    
    // объект обманка
    var casper = {
        average: function () {
            return 7;
        }
    };
    
    function Constructor () {
        // а вот как можно обмануть new;
        // он будет возвращать именно casper
        // если return в коснтрукторе прописан конкретно
        // чтобы конструктор возвращал нужный объект
        // Надо писать либо return this;
        // Либо чтобы return возвращал пустое значение,
        // а это можно сделать двумя способами:
        // 1. return;
        // 2. вообще убрать return
        return casper;
    }
    
    Constructor.prtotype = {
        average: function() {
            // на самом деле arguments не является масивом, 
            // не смотря на то, что у него есть свойство length
            // а вот таким способом можно из arguments получить именно массив
            // args - инстанс Array;
            var args = Array.prototype.slice.call(arguments);
            var avg, i = 0;
            
            // проверка на то, что были переданы значения в функцию
            if (args.length === 0) 
                throw 'Arguments of function average is undefined';
            
            // а тут высчитываем среднее арифметическое
            // сначала складываем все элементы
            for (; i < args.length; i++) {
                avg += args[i];
            }
            
            // а потомм делим на количество
            return avg / args.length;
        }
    }
    
    return Constructor;
} ());


var c = new Class();
var avg = (1 + 2 + 3 + 4 + 5) / 5;

console.log('test instance:', c instanceof Class);

console.log('test function average:', c.average(1,2,3,4,5) === avg);

// Запускаем:
// node tests/test.js
// Результат:
// test instance: false
// test function average: false





    
    
