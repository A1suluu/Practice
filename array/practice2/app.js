// =========== 1.leedCOde ==========

// 21. Merge Two Sorted Lists
// let otherArr = [8, 3, 5, 6, 7]
// let firstArr = [2, 1, 4, 9, 10]

// let f = otherArr.concat(firstArr)
// console.log(f)

// let c = f.sort( (a, f) => a - f)
// console.log(c)



// =========== 2 oldCode.ru ==========
// Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.

// let arr = [1, 2, 3]   
// let result = 0;

// for( let i = 0; i < arr.length; ++i ) {
//      result += arr[i];
// }
    
// console.log( result ); // 6



// =========== 3 oldCode.ru ==========
// Создайте массив с элементами 2, 5, 3, 9. Умножьте первый 
// элемент массива на второй, а третий элемент на четвертый. 
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.


// let arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + arr[2] * arr[3];
// console.log(result)



// let lengths = [2, 3, 4].map(item => item * item);
// console.log(lengths);


// =========== 4 oldCode.ru ==========


// let arr = [1, 2, 3, 7];

// console.log(arr[arr.length - 1]) 
// console.log(arr.length) 


//Создайте массив с элементами 'a', 'b', 'c'. 
//Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

// let fruits = ["a", "b", "с"];

// fruits.pop()
// fruits.push(3)
// fruits.shift()
// fruits.unshift(1)
// fruits.splice(1, 1, 2); 

// console.log( fruits );


// let arr = [1, 2, 3, 4];

// ++arr[0];
// arr[1]+1;
// --arr[2];
// arr[3]--;

// console.log(arr); // выведет [2, 3, 2, 3]



// =========== 5.leedCOde ==========
// 27. Remove Element

// let num = [1,53,2,2,3], val = 3

// num = num.filter(function(item){
//     return item !== 3
// })

// console.log(num); 
// console.log(num.length);



// var removeElement = function(nums, val) {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] != val) {
//             nums[i] = nums[j];
//             i++;
//         }
//     }
//     return i;
// }



// =========== 6.leedCOde ==========
// 28.Implement strStr()


// let haystack = "hello";
// console.log(haystack.indexOf("ll") );


// let b = haystack.split('') 
// console.log(b)


// var strStr = function (haystack, needle) {
//     // Base condition
//     if (haystack == null || needle == null) {
//         return -1;
//     }
//     // Special case
//     if (haystack === needle) {
//         return 0;
//     }
//     // length of the needle
//     const needleLength = needle.length;
//     // Loop through the haystack and slide the window
//     for (let i = 0; i < haystack.length - needleLength + 1; i++) {
//         // Check if the substring equals to the needle
//         if (haystack.substring(i, i + needleLength) === needle) {
//             return i;
//         }
//     }
//     return -1;
// };



// =========== 7.leedCOde ==========


