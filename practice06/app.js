// ============ 5. конкатенация   &  шаблонные строки ============ 


// конкатенация "строка" + "строка"

// const UserName = "Mark";

// console.log("Hello," + UserName + "! " + "How are you ?");

// // шаблонные строки и интерполяция
// console.log(`Hello, ${UserName}! How are you ?`);








// ============ 6. Функции ============ 

// DRY - don^t repeat yourself



//Function + name of function + parameters + block of code

// function sayHi() {
//     console.log("Hello, our user");
// }

// // Обращаемся к имени функции и вызываем функцию
// sayHi();   


// // function declaration    можем вызвать и ниже от кода и выше
// function sayHello(){          
//     alert("Hello")
// }

// // function expression    вызываем только ниже по коду
// let sayBye = function () {
//     alert = ("Bye")
// }







// ============ 6.1 Параметры и аргументы для функции ============ 

//объявили парамерт name
// function sayHi(name) {  
//     console.log(`Hello, ${name}! How are you ?`);
// }

// // в круглые скобки передала значение, которое попадет на параметр name
// sayHi("Markie")
// sayHi("Enne")
// sayHi("James")
 

// ============ 6.2 return ============


// в данном случае никакое значение это нам не дает 
// function summ(a, b) {
//     let result = a + b; 
//     console.log(result)
// }

// summ(10, 15);   



// let res = summ(10, 15);

// function summ(a,b) {
//     let result = a + b;
//     return result;             // вернет значение в переменную result.  return завершаем работу и выоводит результат
// }

// console.log(res)





  



// ============ 6.3 Функция как аргумент ============


function summ(a, b) {
    // let result = a + b;   сокращенная форма создания переменной
    return a + b ;             
};

// let res = summ(10, 15)
// console.log(res)

// // сокращенная форма 
// console.log(summ(10, 15));


// let result = summ(summ(10, 15), summ(20,20));       
// console.log(result)

// передали аргумент как функцию и поэтому если убрать первый summ, код ломается. так как мы передаем так функцию


function diff (a , b){
    return a - b;
}


function doSomething(func){   // есть функиция doSomething, она принимает в себя в качестве аргумента 
    let x = 10;               // принимает  эту функицю 
    let y = 15;
    let result = func(x, y);  //  func используесть как параметр и запускается такими аргументами
    console.log(result);
}

doSomething(summ);
doSomething(diff);

