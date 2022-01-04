// Number

let interger = 42
let float = 42.42
let pow = 10e3                                    // возводим 10 в степень 3 через букву e

console.log(Number.MAX_SAFE_INTEGER + 5)          // максимальное число в js, которым можно делать операции
console.log(Math.pow(2, 53) - 1)                  // возводим единицу в 53 степень
console.log("Number.MIN_SAFE_INTEGER,", Number.MIN_SAFE_INTEGER)     
console.log(Number.MAX_VALUE)                     // максимальный интержер и значение, которым js может оператировать
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)             // позитивное бесконечность
console.log(Number.NEGATIVE_INFINITY)             // отрицательное бесконечность
console.log("2 / 0", 2 / 0)                       // получаем бесконечность
console.log(Number.NaN)                           // не является числом
console.log(typeof NaN)
console.log( 2 / undefined)                       // получаем NaN
let weird = 2 / undefined
console.log(isNaN(weird))                         // является ли число NaN. проверка
console.log(Number.isNaN(4))
console.log(Number.isFinite(42))                  // к ff