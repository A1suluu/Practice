// ============= 7. Arrays =============

// let autoBrands1 = "Toyota";
// let autoBrands2 = "BMW"; 
// let autoBrands3 = "Lexus";
// let autoBrands4 = "Mazda";

// let autoBrands = ["Toyota", "BMW" , "Lexus", "Mazda"];
// console.log(autoBrands[0]);
// console.log(autoBrands.length);










// ============= 7.1 Методы Массива =============

/*
  .push() , .pop(), .shift(), .unshifrt(), .splice(), 
  .forEach(), .indexOf(), .includes(),
*/

/*
arr.push(...items) - Добавить элемент в конце массива
arr.pop() - удалить элемент из конца массива
arr.shift() - удалить элемент из начала массива
arr.unshift(...items) - добавить элемент в начало массива
arr.splice([start], [deleteCount, newElements])
*/


//===== push =====

// let autoBrands = ["Toyota", "BMW" , "Lexus", "Mazda"];
// console.log(autoBrands); 

// autoBrands.push("Nisan")
// console.log(autoBrands); 

// let array2 = autoBrands;    
// //  ссылаются на один и тот же массив и поэтому оба вавны даже через === , булиан значение равно True


// //===== splice =====

// // первая цифра ознчачает "начни с элеметого элемента по индексу", второй элемент говорит "удали такое число элементов"
// autoBrands.splice(2, 1);  
// console.log(autoBrands); 







// ============= 8.Циклы =============

// console.log("start")

// for (let i = 0; i < 10; i++ ) {
//     console.log(i)
// }

// console.log("finish")










// ============= 9.Обходмассива циклов =============


// let autoBrands = ["Toyota", "BMW" , "Lexus", "Mazda"];
// console.log(autoBrands[0]);
// console.log(autoBrands[1]);
// console.log(autoBrands[2]);
// console.log(autoBrands[3]);
// console.log(autoBrands[4]);

// for (let i = 0; i < autoBrands.length; i++ ) {
//     console.log(i);
//     console.log(autoBrands[i]);
// }






// ============= 10. Цикл for ( of ). Обход массива циклом for ( of ) =============

console.log("item");

let autoBrands = ["Toyota", "BMW" , "Lexus", "Mazda"];

for (let item of autoBrands) {           
    console.log(item);
}


//for...of Оператор создает цикл, повторяющий повторяющиеся объекты, в том числе: встроенные StringArray


// ============= 11. Метод .forEach() для обхода массивов =============