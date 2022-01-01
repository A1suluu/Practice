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

let courseStatus = "ready"
 
if (courseStatus === "ready") {
    console.log("Курс уже готов и его можно проходить")
}

if (courseStatus === "fail") {
    console.log("Курс закончен")
} else {
    console.log("Курс пока находиться в процессе")
}

// === строгое равно

let isReady = false

if (isReady) {   //(isReady === true)
    console.log ("Все готово!")
} else {
    console.log ("Все не готово!")
}