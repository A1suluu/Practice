 // number 1

// let str = 'abcde';
// alert(str[0]); //выведем букву 'a'
// alert(str[1]); //выведем букву 'b'
// alert(str[4]); //выведем букву 'e'



// Задача 1    ===== Работа с переменными =====

// let num = 3;

// alert(num)



// Задача 2

// let a = 10 
// let b = 2

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)



// Задача 3

// let c = 15 
// let d = 2
// let a = c + d

// console.log(a);



// Задача 4

/* Создайте переменные a=17 и b=10. Отнимите от a
 переменную b и результат присвойте переменной c. 
 Затем создайте переменную d, присвойте ей значение 7.
 Сложите переменные c и d, а результат запишите в переменную result. 
Выведите на экран значение переменной result. */

// let a = 17
// let b = 10
// let c = a - b
// let d = 7
// let result = c - d

// console.log(result)






// Задача 10


// let userName = prompt(("Введите имя:"))

// alert("Ваше имя: " + userName)



// Задача 11


// let num1 = prompt('Введите любое число.');

// alert(num1 * num1);




// Задача 12

// let a = "abcde"

// console.log(a[0], a[2], a[4])



// Задача 13


// let numOne = 1234;
// let a = 1

// for (i = 1; i < 5; i++) {
//     let a = numOne * i
//     console.log(a)
// }


// Задача 14

// console.log(60 * 60 * 24 * 31 + " секунд в месяце")


// Задача 15

// let hour = 14
// let minute = 52
// let second = 30

// console.log("час: " + hour + " минута: " + minute + second + " секунда." )




// Задача 16

// let a = 3

// let b = Math.pow(a, a)     
// let c = a ** a
// два способа возведения на квадрат

// console.log(b)
// console.log(c)



// Задача 17
 

// var num2 = 47;
// num2 = num2 + 7;
// num2 = num2 - 18;
// num2 = num2 * 10;
// num2 = num2 / 15;

// console.log(num2);

// let num = 47;

// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;

// console.log(num);



// Задача 18

// var num = 10;
// num  ++ ;
// num  ++ ;
// num  -- ;

// console.log(num);

// var num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;

// console.log(num);




/*

var arr = ['Привет, ', 'мир', '!'];
arr[0] = 'Пока, '; //перезапишем нулевой элемент массива

console.log(arr); //посмотрим на массив и убедимся в том, что он изменился


var obj = {
    'Коля':'1000', 
    'Вася':'500', 
    'Петя':'200'};

console.log(obj['Коля']); //выведет 1000




========= Способы создания массива =========


Первый способ создать массив - объявить его через [ ]:

var arr = [1, 2, 3, 4, 5];

Второй способ создания массива - это поступить таким образом:

var arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5; 



========= Многомерный массив =========


var arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};


alert(arr['ru']);
alert(arr['ru'][0]); */



// Задача 1 . Массивы 

// let arr = ['a', 'b', 'c']

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])


// Задача 2 

// let arr = [1, 5, 3, 9]
// let multi = arr[0] + arr[1]
// let multi2 = arr[2] + arr[3] 

// let result = [multi, multi2]

// console.log(result)



// Задача 3

// let arr = ['a', 'b', 'c', 'd'] 

// console.log(arr[0]  + "+" + arr[1], arr[2] + "+" + arr[3])



// Задача 4

// let arr = [1, 5, 3, 9]
// let multi = arr[0] * arr[1]
// let multi2 = arr[2] * arr[3] 
// let result = [multi, multi2]

// console.log(result)




// Задача 5

// let obj = {a: 1, b: 2, c: 3};

// console.log(obj["c"])    // через квадратные скобки 
// console.log(obj.c)       //  как свойство объекта



// Задача 6

// let obj = {Коля: '1000', Вася: '500', Петя: '200'};
// console.log(obj["Коля"], obj["Петя"])   


// Задача 7

// let obj = {
//     first: "Monday",
//     second: "Tuesday",
//     third: "Wednesday",
//     fourth: "Thursday"
// }

// console.log(obj.third)



// Задача 8

// let obj = {
//     first: "Monday",
//     second: "Tuesday",
//     third: "Wednesday",
//     fourth: "Thursday"
// }

// let day = obj.third 

// console.log(day + " is the third day of week")




// Задача 8

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]

console.log(arr[1][0])


let arrTwo = {js:['jQuery', 'Angular'], 
            php: 'hello',
            css: 'world'}

console.log(arrTwo.js[0])