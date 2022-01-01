// let lastName = "Baiysheva" //String
// let age = 17                 //number
// var Info = true              //boolean
// let firstName = "Aisuluu"

// const _ = "private"
// const $ = "test"
// const with5 = "5"

//2  Мутирование

//console.log("Имя человека" + lastName + " , а возраст человека:" + age) //.toString

//alert(firstName + "" + lastName)      //prompt - окошко, куда можно вписать данные 
//let lastName = prompt("Введите фамилию")  //alert - сообщение, которое передается пользователю




//3 Операторы

// let currentYear = 2021
// let birthYear = 2004

// let myAge = currentYear - birthYear

// console.log(age)


// let a = 10
// let b = 5

// let c = 32 

// // c = c + a
// c += a                       // заменя синтаксиса

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)
// console.log(currentYear)     //показывает первым этот оператор по приоритету 
// console.log(c)


//4  Типы данных

// const AisuluuIsMyName = true
// const secondName = "Ais"
// const age = 17
// let x


// console.log(typeof AisuluuIsMyName)
// console.log(typeof secondName)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)   //баг в языке JS





// 5 Приоритет операторов 

const Fullage = 17
const birthYear = 2004
const currentYear = 2022

const isFullAge = currentYear - birthYear >= Fullage

// > строго больше   < сторого меньше   >= больше или равно   <= меньше либо равно     -  отвечают за сравнение
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence



// 6 Условные операторы 

// let courseStatus = "ready"
 
// if (courseStatus === "ready") {
//     console.log("Курс уже готов и его можно проходить")
// }

// if (courseStatus === "fail") {
//     console.log("Курс закончен")
// } else {
//     console.log("Курс пока находиться в процессе")
// }

// // === строгое равно

// let isReady = false

// if (isReady) {   //(isReady === true)
//     console.log ("Все готово!")
// } else {
//     console.log ("Все не готово!")
// }







// 7 Булевая логика

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators



// 8 Функции

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions

// function calculateAge(year) {
//     return 2022 - year
// }

// let myAge = calculateAge(2004)

// console.log(myAge)

// console.log (calculateAge(2004))



// function logInfoAbout (name, year) {
//     let age = calculateAge(year)                //создаем переменную вызвав функцию calculate и передать параметр year

//     if (age > 0) {
//         console.log("Человек по имени " + name + " сейчас имеет возраст " + age )
//     } else {
//         console.log ("ERROR!")
//     }
// }

// logInfoAbout("Айсулуу", 2004) 
// logInfoAbout("Баястан", 2030) 





//9 Массивы 

let cars = ["mazda, mercedes, ford", 1970, false]

// let cars = new Array "mazda, mercedes, ford", 1970, false)    //new array выполняет ту же функцию, что и []

console.log(cars[0])                                             // вызываем элемент по индексу
console.log(cars[0].length)                                      // получаем число, сколько элементов внутри массива
console.log(cars.length)   

cars[1] = "Toyto"                                                // можем менять значение элемента вне массива
cars[3] = "Lexus"                                                // создать значение элемента вне массива
cars[cars.length] = "Kia"                                        // создаем элемент в конце массива

console.log(cars)                                               


