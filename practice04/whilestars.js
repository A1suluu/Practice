for (let i = 0; i < 6; i++) {
    console.log(i);
}

let k = 0;

while (k < 5) {                      //условие должно быть true
    //k++                            // начинается с 1 до 5
    console.log("k: " + k++);  
   // +k                           // начинается с 0 до 5
    if(k === 3) continue;                     //continue 
    k++;
}



// найти сумму чисел 1 + 2 + 3
//0 + ... 3

let sum = 0; 
let u = 0;

while(u <= 3) {
    sum = sum + u;
    u++;
}

console.log("sum = " + sum)




//****
//****
//****
//****

let p = 0;
let outStr = "";
let flag = 3

while (p < 4){
    let p1 = 0;
    while(p1 < 4) {
        outStr += "*";
        p1++;
    }
    outStr += "<br>";
    p++;
}

console.log(outStr)





/*
1. создаем переменную, которая будет отвечать за длину елки 
2. создаем вторую переменную, которая отвечает за присваивание * - звездочек 
с увеличиваем длины

3. цикл while, внутри даем значение p меньше 4. То есть нынешнее значение p равно 4 и цикл закончится на этой длине
создаем переменную внутри цикла для того, чтобы она присваивалась внешней переменной
создаю цикл внутри цикла, где третья переменная также меньше 4
4. присваиваем второй переменной звездочки 
5. увеличиваем p на число

*/