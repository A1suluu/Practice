//  options of getting elements

let heading = document.getElementById('hello') 
console.dir(heading.textContent)

let h2List = document.querySelectorAll('h2')
console.log(h2List)

let heading5 = h2List[0]
let heading6 = h2List[h2List.length - 1]
console.log(heading5)


// let heading4 = document.querySelector('h2')              
// let heading3 = heading4.nextElementSibling
// let heading0 = document.querySelector('#test0')
// let heading0 = document.querySelector('.h2Class')
// let heading3 = document.getElementsByClassName('h2Class') 
// let heading2 = document.getElementsByTagName('h2')[0]          
// let testTwo = document.body


setTimeout( () => {
    addStylesTo(heading, 'JavaScript') 
}, 1500)

setTimeout( () => {
    addStylesTo(heading5, 'HTML', "blue", '2rem')
}, 2500)

let link = heading6.querySelector('a')

link.addEventListener('click',  ()  => {
    console.log('Click on click')
} )

setTimeout( () => {
    addStylesTo(link, 'CSS', '#FDE74C','2rem' )       // .children[0]
}, 3500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.background = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy, undefided, null, 0 , false
    if(fontSize) {
        node.style.fontSize = fontSize
    }
}

// events in JS

heading.onclick = () => {
    console.log('click')
    if(heading.style.color === 'red') {
        heading.style.color = "black"
        heading.style.backgroundColor = "white"
    } else {
        heading.style.color = "red"
        heading.style.backgroundColor = "black"
    }
}

heading5.addEventListener('dblclick',  listener = () => {
    if(heading5.style.color === 'blue') {
        heading5.style.color = "black"
        heading5.style.backgroundColor = "white"
    } else {
        heading5.style.color = "blue"
        heading5.style.backgroundColor = "black"
    }
} )