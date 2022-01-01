// цикл While 

//пример
// let num = 5;
// while (num) {                 //условия 'num'
//     console.log(num)
//     num--;
// }

// let test2 = 0; 
// while (test2 < 5) {           
//     console.log(test2)        
//     test2++;                   
// }




// цикл Do while


// do {
//     console.log(num);  
//     num++ ;
// } while (num < 0)              // error  так как 0 не больше 0, но оно сработает так как условие внизу



let test3 = 0;

for (; test3 < 5 ; test3++ ) {
    // if (test3 == 2) break;        //досрочно прекрашает работу директива "break"
    if (test3 == 2) continue;        // прекращает работу части тела директива "continue"
    console.log (test3);
}


// console.log("Работа окончена, test3 = ${test3}"); ERROR!










//метки

firstFor : for (let test4 = 0; test4 < 2; test4++) {
    for(let size = 0; size < 3; size++) {
        if (size == 2) {
            break firstFor;                          //останавливает работу родителя
        }
        console.log(size);
    }
}







