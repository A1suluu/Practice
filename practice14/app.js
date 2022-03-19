// function showNumber (num) {
//     console.log(num);
//     let timeId = setTimeout(showNumber, 1000, ++num);
//     if (num === 6) {                         // num < 5
//         clearTimeout(timeId);
//     }
// }

// setTimeout(showNumber, 1000, 1);


let result = 0;
function showNumber (num) {
    result += num;
    console.log(num);
    if (result === 6) {                         // num < 5
        clearInterval(timeId);
    }
}

let timeId = setInterval(showNumber, 1000, 1);

