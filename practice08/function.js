// Объявление функции (Function Declaraction)

// функция вывода сообщения

function ShowMessage () {
    console.log ("Message");
}

 // запуск фукции

ShowMessage();





// Вложенность и видимость функций 

 function getSumm () {
     let numOne, numTwo;
     function getNumOne() {
         numOne = 1 ;
     }
     function getNumTwo(){
         numTwo = 2 ;
     }
     getNumOne
     getNumTwo

     let numSumm = numOne + numTwo;
     console.log(numSumm)
 }
 
 getNumOne(); // error. пр создании функции внутри функции,
              //  дочерняя функция не работает
 getSumm()

