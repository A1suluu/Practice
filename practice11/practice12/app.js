// обращение к "div". DOM-узел элемента <div>

document.body.firstElementChild
document.body.children[0]
document.body.childNodes[1]

//DOM-узел элемента <ul>:

document.body.lastElementChild
// или
document.body.children[1]
//Второй <li> (с именем Пит):

// получаем <ul>, и его последнего ребёнка
document.body.lastElementChild.lastElementChild


/* 
for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}
*/
