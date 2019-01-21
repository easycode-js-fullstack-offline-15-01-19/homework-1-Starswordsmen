// -------------------------- Home work --------------------------
// -------------------------- ФИО --------------------------
// Салтан Сергей дз№1

// 1. Получить первую и последнюю буквы строки
let str = 'some test string';
let first = str[0];
let last = str[str.length-1];
console.log(str);

// // 2. Сделать первую и последнюю буквы в верхнем регистре
let bigFirst = first.toUpperCase(); 
let bigLast = last.toUpperCase();
console.log(bigFirst);
console.log(bigLast);

// // 3. Найти положение слова ‘string’ в строке
let position = str.indexOf('string');
console.log(position);

// // 4. Найти положение второго пробела 
let spacePosition = str.indexOf(' ');
let seconSpacePosition = str.indexOf(' ', spacePosition+1);
console.log(spacePosition);
console.log(seconSpacePosition);

// 5. Получить строку с 5-го символа длиной 4 буквы
let firstSubstr = str.substr(5, 4);
console.log(firstSubstr);

// 6. Получить строку с 5-го по 9-й символы
let secondSubstr = str.slice(5, 9);
console.log(secondSubstr);

/* 7. Получить новую строку из исходной путем удаления последних 6-и символов
 (то есть исходная строка без последних 6и символов) */
let thirdSubstr = str.slice(0, -6);
console.log(thirdSubstr);

/* 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
содержаться текст “2016”*/ 
a = 20;
b = 16;
let string = a + b.toString();
console.log(string);

// Числа\Задачи
// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
mathPI = (Math.PI).toFixed(2);
console.log(Math.PI);         
    


/* 2. Используя Math,найти максимальное и минимальное числа из представленного ряда
 15, 11, 16, 12, 51, 12, 13, 51*/
 let mathMax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);  
 let mathMin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);  

console.log(mathMax);
console.log(mathMin);

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let c = 0.6;
let d = 0.7;
let sum = (c + d).toFixed(1);      
console.log(sum); 

// 5. Получить число из строки ‘100$’
let dollar= parseInt("100$");
console.log(dollar);

// 1. Создать объект с полем product, равным ‘iphone’
let one = {
    product: 'iphone',
    // one.product = 'price = 1000'
};
console.log(one);

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
one.price = 1000;
one.currency = 'dollar';

// 3. Добавить поле details, которое будет содержать объект с полями model и color
one.details = {
    model: 'XS',
    color: 'white'
};
